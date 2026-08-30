import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { KeyStrengths } from './components/KeyStrengths';
import { SunsetTracker } from './components/SunsetTracker';
import { MenuSection } from './components/MenuSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TravelCourseSection } from './components/TravelCourseSection';
import { GuestbookSection } from './components/GuestbookSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MusicAmbianceModal } from './components/MusicAmbianceModal';
import { Phone, MapPin, Sunset, Music, Volume2 } from 'lucide-react';
import { STORE_INFO } from './data/cafeData';
import { ambientAudio } from './utils/ambientAudio';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [initialMenuCategory, setInitialMenuCategory] = useState<string>('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -70;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavigateMenuWithCategory = (category?: string) => {
    if (category) {
      setInitialMenuCategory(category);
    }
    scrollToSection('menu');
  };

  const handleToggleAudioPlay = (mode: 'sunset' | 'waves' | 'cafe' = 'sunset') => {
    if (isPlayingAudio) {
      ambientAudio.stop();
      setIsPlayingAudio(false);
    } else {
      ambientAudio.start(mode, 0.4);
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Fixed Header */}
      <Header
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        <HeroSection
          onNavigate={scrollToSection}
          onOpenAudio={() => setIsAudioModalOpen(true)}
          isPlayingAudio={isPlayingAudio}
        />

        <KeyStrengths
          onNavigateMenu={handleNavigateMenuWithCategory}
        />

        <SunsetTracker
          onOpenMusic={() => setIsAudioModalOpen(true)}
        />

        <MenuSection
          initialCategory={initialMenuCategory}
        />

        <FacilitiesSection />

        <TravelCourseSection
          onNavigateLocation={() => scrollToSection('location')}
        />

        <GuestbookSection />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onScrollTop={() => scrollToSection('hero')} />

      {/* Music & Seaside Ambiance Modal */}
      <MusicAmbianceModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        isPlaying={isPlayingAudio}
        onTogglePlay={handleToggleAudioPlay}
      />

      {/* Bottom Sticky Quick Action Bar for Mobile Users */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2.5 flex items-center justify-around gap-2 shadow-2xl">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${STORE_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>전화 문의</span>
        </a>

        <button
          id="mobile-sticky-location-btn"
          onClick={() => scrollToSection('location')}
          className="flex-1 py-2.5 px-3 bg-stone-800 text-stone-200 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-stone-700 active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>오시는 길</span>
        </button>

        <button
          id="mobile-sticky-sunset-btn"
          onClick={() => scrollToSection('sunset')}
          className="py-2.5 px-3 bg-stone-800 text-stone-200 font-bold rounded-xl text-xs flex items-center justify-center gap-1 border border-stone-700 active:scale-95 transition-transform"
          title="일몰 시간표"
        >
          <Sunset className="w-3.5 h-3.5 text-orange-400" />
          <span>일몰</span>
        </button>

        <button
          id="mobile-sticky-audio-btn"
          onClick={() => setIsAudioModalOpen(true)}
          className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center ${
            isPlayingAudio
              ? 'bg-amber-500/20 border-amber-400 text-amber-400 animate-pulse'
              : 'bg-stone-800 border-stone-700 text-stone-300'
          }`}
          title="야외 바다 감성 음악"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
