import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Umbrella,
  Sun,
  Maximize2,
  Car,
  Sparkles,
  CheckCircle,
  Music,
  Waves,
  Shield,
  Eye,
} from 'lucide-react';
import { FACILITIES, IMAGES } from '../data/cafeData';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Umbrella':
        return Umbrella;
      case 'SunMedium':
        return Sun;
      case 'Maximize2':
        return Maximize2;
      case 'Car':
        return Car;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Spaces & Amenities</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-[40px] font-extrabold text-white tracking-tight font-serif whitespace-nowrap">
            바다와 노을을 담아낸 <span className="text-amber-400">파라다이스 공간</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 break-keep">
            탁 트인 자갈마당부터 옥상 테라스, 통유리 오션뷰 실내까지 온전한 쉼과 여유를 선사합니다.
          </p>
        </div>

        {/* Facility Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
          {FACILITIES.map((facility, idx) => {
            const Icon = getTabIcon(facility.iconName);
            const isSelected = activeTab === idx;
            return (
              <button
                key={facility.id}
                id={`facility-tab-${idx}`}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-xl scale-[1.02]'
                    : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-stone-950 text-amber-400' : 'bg-stone-900 text-amber-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-stone-950/20 text-stone-950'
                        : 'bg-stone-900 text-stone-400'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">{facility.title}</div>
                  <div
                    className={`text-xs mt-0.5 ${
                      isSelected ? 'text-stone-900 font-medium' : 'text-stone-400'
                    }`}
                  >
                    {facility.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Detail Card */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image View */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-stone-800 shadow-xl group">
              <img
                src={FACILITIES[activeTab].image}
                alt={FACILITIES[activeTab].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                    {FACILITIES[activeTab].subtitle}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold">
                    {FACILITIES[activeTab].title}
                  </h4>
                </div>
                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-xs border border-white/10 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>실제 뷰</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Description & Feature Points */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Facility Highlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  {FACILITIES[activeTab].title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {FACILITIES[activeTab].description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="space-y-3 pt-2">
                {FACILITIES[activeTab].features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 bg-stone-900 rounded-xl border border-stone-800 flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-stone-200">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Atmosphere Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-3">
                <Music className="w-5 h-5 shrink-0 text-amber-400" />
                <span>
                  야외 스피커를 통해 기분 좋은 감성 음악이 은은하게 흘러나와 더욱 분위기가 좋습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
