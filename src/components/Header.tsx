import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Sun, Volume2, VolumeX, Menu, X, Compass } from 'lucide-react';
import { STORE_INFO } from '../data/cafeData';
import { ambientAudio } from '../utils/ambientAudio';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (isPlayingAudio) {
      ambientAudio.stop();
      setIsPlayingAudio(false);
    } else {
      ambientAudio.start('sunset', 0.4);
      setIsPlayingAudio(true);
    }
  };

  const navItems = [
    { id: 'strengths', label: '파라다이스 매력' },
    { id: 'menu', label: '메뉴 & 식사' },
    { id: 'facilities', label: '공간 & 뷰' },
    { id: 'sunset', label: '일몰 가이드' },
    { id: 'course', label: '드라이브 코스' },
    { id: 'guestbook', label: '방문 후기' },
    { id: 'location', label: '오시는 길' },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800 text-white py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="header-logo-btn"
          onClick={() => handleNavItemClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                카페 파라다이스
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                영광 백수해안도로
              </span>
            </div>
            <p className="text-[11px] text-stone-300 tracking-wider">
              PARADISE CAFE & OCEAN LOUNGE
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavItemClick(item.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Music Button */}
          <button
            id="ambient-audio-toggle"
            onClick={toggleSound}
            title={isPlayingAudio ? '야외 감성 음악 끄기' : '야외 감성 음악 & 파도소리 켜기'}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isPlayingAudio
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.4)] animate-pulse'
                : 'bg-white/10 border-white/20 text-stone-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">음악 ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">바다음악</span>
              </>
            )}
          </button>

          {/* Quick Call */}
          <a
            id="header-quick-call-btn"
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 rounded-lg text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>전화 문의</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-stone-200 hover:text-white hover:bg-white/20"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 flex items-center justify-between text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>영광군 백수해안도로 624</span>
            </div>
            <button
              onClick={() => handleNavItemClick('location')}
              className="text-amber-400 font-semibold underline"
            >
              지도보기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
