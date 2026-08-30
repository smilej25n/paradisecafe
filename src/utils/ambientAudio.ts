// Web Audio API based ambient sea wave and gentle sunset guitar chord synthesizers
// Works entirely in browser without external audio assets dependencies

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private seaGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private melodyTimer: number | null = null;
  private seaNoiseNode: AudioNode | null = null;
  private currentMode: 'sunset' | 'waves' | 'cafe' = 'sunset';

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Create Pink/Brown noise generator for gentle rolling ocean waves
  private createWaveSound(): AudioNode {
    if (!this.ctx) throw new Error('No context');
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to simulate ocean swells (low pass with slow modulated cutoff)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);

    // LFO for wave swelling
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // ~8 seconds per wave swell
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(250, this.ctx.currentTime);

    lfo.connect(filter.frequency);
    whiteNoise.connect(filter);
    lfo.start();
    whiteNoise.start();

    return filter;
  }

  // Play gentle warm sunset acoustic chords (Cmaj7 -> Am7 -> Fmaj7 -> G7)
  private playChord(notes: number[], duration: number) {
    if (!this.ctx || !this.isPlaying || !this.musicGain) return;

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.musicGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const startTime = this.ctx.currentTime + idx * 0.08;
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.1);
    });
  }

  public start(mode: 'sunset' | 'waves' | 'cafe' = 'sunset', volume: number = 0.5) {
    this.initContext();
    if (!this.ctx) return;

    this.stop();
    this.isPlaying = true;
    this.currentMode = mode;

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.seaGain = this.ctx.createGain();
    this.seaGain.gain.setValueAtTime(mode === 'waves' ? 0.8 : 0.4, this.ctx.currentTime);
    this.seaGain.connect(this.masterGain);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.setValueAtTime(mode === 'waves' ? 0 : 0.6, this.ctx.currentTime);
    this.musicGain.connect(this.masterGain);

    // Start waves
    const waveSource = this.createWaveSound();
    waveSource.connect(this.seaGain);
    this.seaNoiseNode = waveSource;

    // Start chord progressions
    const progressions = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 349.23], // G7
      [220.00, 277.18, 329.63, 440.00], // A sus / warm
      [174.61, 261.63, 329.63, 392.00], // Fmaj9
    ];

    let chordIdx = 0;
    const playNext = () => {
      if (!this.isPlaying) return;
      if (this.currentMode !== 'waves') {
        const chord = progressions[chordIdx % progressions.length];
        this.playChord(chord, 4.2);
        chordIdx++;
      }
      this.melodyTimer = window.setTimeout(playNext, 4600);
    };

    playNext();
  }

  public setVolume(volume: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
    if (this.ctx && this.ctx.state !== 'closed') {
      try {
        this.masterGain?.disconnect();
        this.seaGain?.disconnect();
        this.musicGain?.disconnect();
      } catch {
        // ignore disconnect errors
      }
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientSoundEngine();
