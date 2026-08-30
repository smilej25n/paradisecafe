import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Music, Waves, Coffee, X, Sparkles, Play, Square } from 'lucide-react';
import { ambientAudio } from '../utils/ambientAudio';

interface MusicAmbianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: (mode?: 'sunset' | 'waves' | 'cafe') => void;
}

export const MusicAmbianceModal: React.FC<MusicAmbianceModalProps> = ({
  isOpen,
  onClose,
  isPlaying,
  onTogglePlay,
}) => {
  const [selectedMode, setSelectedMode] = useState<'sunset' | 'waves' | 'cafe'>('sunset');
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    ambientAudio.setVolume(volume / 100);
  }, [volume]);

  const handleModeChange = (mode: 'sunset' | 'waves' | 'cafe') => {
    setSelectedMode(mode);
    if (isPlaying) {
      ambientAudio.start(mode, volume / 100);
    }
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      ambientAudio.stop();
      onTogglePlay(selectedMode);
    } else {
      ambientAudio.start(selectedMode, volume / 100);
      onTogglePlay(selectedMode);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-stone-900 border border-stone-700 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-orange-500/20">
            <Music className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">야외 감성 음악 & 파도소리</h3>
            <p className="text-xs text-amber-400 mt-0.5">자갈마당 테라스 사운드스케이프</p>
          </div>
        </div>

        {/* Visual Animated Wave Bars */}
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4 mb-6 flex flex-col items-center justify-center gap-3">
          <div className="flex items-end gap-1.5 h-12">
            {[40, 75, 55, 90, 65, 80, 45, 100, 70, 85, 50, 95, 60].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full bg-gradient-to-t from-amber-500 to-orange-400 transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : 'opacity-30'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(15, (h * volume) / 100)}%` : '20%',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-stone-400">
            {isPlaying
              ? '바닷바람과 함께 카페 밖으로 음악이 잔잔하게 흘러나옵니다'
              : '재생 버튼을 눌러 파라다이스의 감성을 느껴보세요'}
          </span>
        </div>

        {/* Sound Mode Selector */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-bold text-stone-300">음악 모드 선택</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleModeChange('sunset')}
              className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                selectedMode === 'sunset'
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>노을 & 파도</span>
            </button>

            <button
              onClick={() => handleModeChange('waves')}
              className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                selectedMode === 'waves'
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>영광 바다 파도</span>
            </button>

            <button
              onClick={() => handleModeChange('cafe')}
              className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                selectedMode === 'cafe'
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>어쿠스틱 카페</span>
            </button>
          </div>
        </div>

        {/* Volume Slider */}
        <div className="space-y-2 mb-8">
          <div className="flex justify-between text-xs text-stone-300">
            <span>볼륨 조절</span>
            <span className="text-amber-400 font-bold">{volume}%</span>
          </div>
          <div className="flex items-center gap-3">
            <VolumeX className="w-4 h-4 text-stone-500 shrink-0" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
          </div>
        </div>

        {/* Main Play / Stop Button */}
        <button
          onClick={handlePlayToggle}
          className={`w-full py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
            isPlaying
              ? 'bg-stone-800 text-amber-400 hover:bg-stone-700 border border-amber-500/40'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 shadow-amber-500/20'
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-4 h-4 fill-amber-400" />
              <span>음악 일시정지</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-stone-950" />
              <span>음악 재생하기</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};
