import React from 'react';
import { motion } from 'motion/react';
import { Sun, Sparkles, Coffee, Navigation, Phone, Heart, Utensils, Music, ShieldCheck } from 'lucide-react';
import { STORE_INFO, IMAGES } from '../data/cafeData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenAudio: () => void;
  isPlayingAudio: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenAudio,
  isPlayingAudio,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950 text-white">
      {/* Background Image with warm sunset gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.heroSunset}
          alt="전남 영광 백수해안도로 카페 파라다이스 전경 및 노을 뷰"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Soft atmospheric gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-transparent to-stone-950/90" />
        <div className="absolute inset-0 bg-amber-950/15 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Location & Sunset Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-md text-xs sm:text-sm font-medium mb-6 shadow-lg"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>전남 영광 백수해안도로 바다 바로 앞</span>
          <span className="text-amber-400/60">|</span>
          <span className="text-white font-semibold">노을 & 오션뷰 명당 쉼터</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight font-serif break-keep"
        >
          <span className="block mb-1.5 sm:mb-2 text-stone-100">파도소리와 음악이 흐르는</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300">
            <span className="whitespace-nowrap">노을빛 바다 앞 쉼터,</span>{' '}
            <span className="whitespace-nowrap">카페 파라다이스</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-200 text-xs sm:text-base md:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed drop-shadow-md space-y-1.5 break-keep"
        >
          <span className="block">백수해안도로를 따라 달리다 만나는 바다와 노을이 머무는 카페 파라다이스.</span>
          <span className="block">넓은 자갈마당과 파라솔, 루프탑 테라스에서 맛있는 음식과 향긋한 커피,</span>
          <span className="block">붉게 물드는 서해의 노을과 함께 잠시 쉬어가는 특별한 시간을 선물합니다.</span>
        </motion.p>

        {/* CTA Buttons - Vertical column on mobile (centered), horizontal row on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-xl mx-auto mb-8 sm:mb-10 w-full"
        >
          <button
            id="hero-menu-cta"
            onClick={() => onNavigate('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer whitespace-nowrap"
          >
            <Utensils className="w-4 h-4 shrink-0" />
            <span>메뉴 & 맛있는 식사 보기</span>
          </button>

          <button
            id="hero-location-cta"
            onClick={() => onNavigate('location')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-white font-medium rounded-xl border border-stone-600/80 transition-all text-sm sm:text-base backdrop-blur-sm cursor-pointer whitespace-nowrap hover:border-amber-500/50"
          >
            <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
            <span>오시는 길 & 무료 주차장</span>
          </button>
        </motion.div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto text-left"
        >
          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 hover:border-amber-500/50 transition-all group">
            <div className="text-amber-400 mb-1.5 flex items-center justify-between">
              <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">오션뷰</span>
            </div>
            <div className="font-bold text-white text-sm">자갈마당 & 루프탑</div>
            <div className="text-xs text-stone-400 mt-0.5">파라솔 벤치 5석 + 옥상 뷰</div>
          </div>

          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 hover:border-amber-500/50 transition-all group">
            <div className="text-amber-400 mb-1.5 flex items-center justify-between">
              <Utensils className="w-5 h-5" />
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">엄마손맛</span>
            </div>
            <div className="font-bold text-white text-sm">수제돈가스·닭발</div>
            <div className="text-xs text-stone-400 mt-0.5">김치볶음밥·끓인라면</div>
          </div>

          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 hover:border-amber-500/50 transition-all group">
            <div className="text-amber-400 mb-1.5 flex items-center justify-between">
              <Sparkles className="w-5 h-5" />
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">편의쉼터</span>
            </div>
            <div className="font-bold text-white text-sm">캔맥주·과자·담배</div>
            <div className="text-xs text-stone-400 mt-0.5">해안도로의 필수 오아시스</div>
          </div>

          <div className="bg-stone-900/80 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 hover:border-amber-500/50 transition-all group">
            <div className="text-amber-400 mb-1.5 flex items-center justify-between">
              <Coffee className="w-5 h-5" />
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">수제베이커리</span>
            </div>
            <div className="font-bold text-white text-sm">튀일·마들렌·쿠키</div>
            <div className="text-xs text-stone-400 mt-0.5">정성으로 구워낸 수제 구움과자</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom subtle ambient waves divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-900 to-transparent" />
    </section>
  );
};
