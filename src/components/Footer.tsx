import React from 'react';
import { Sun, Heart, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/cafeData';

export const Footer: React.FC<{ onScrollTop: () => void }> = ({ onScrollTop }) => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Left Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-serif">
                  {STORE_INFO.name}
                </span>
                <span className="text-xs text-amber-400 block tracking-wider">
                  {STORE_INFO.subName}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-lg">
              영광 백수해안도로 바다 앞 아늑한 쉼터. 따뜻한 정성과 탁 트인 노을이 머무는 카페 파라다이스에서 소중한 쉼을 누리세요.
            </p>
          </div>

          {/* Right Info Col */}
          <div className="md:col-span-6 space-y-2 text-xs text-stone-400">
            <div className="font-bold text-stone-200 text-sm mb-2">매장 정보</div>
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{STORE_INFO.address} ({STORE_INFO.addressDetail})</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>전화문의: {STORE_INFO.phone}</span>
            </p>
            <div className="flex items-start gap-1.5 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex items-start gap-1 leading-relaxed">
                <span className="shrink-0">영업시간 :</span>
                <div className="space-y-0.5">
                  <div>평일 13:30 ~ 19:00 (일몰 시간에 따라 탄력적 연장 영업)</div>
                  <div className="text-stone-300">주말과 공휴일 : 9:30 ~ 20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-stone-500">
            <span>© {new Date().getFullYear()} 카페 파라다이스. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onScrollTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>맨 위로</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
