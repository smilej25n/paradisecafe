import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  Car,
  Copy,
  Check,
  Navigation,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { STORE_INFO, IMAGES } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const exactAddress = '전남광주통합특별시 영광군 백수읍 해안로 703';
  const fullDestination = '전남광주통합특별시 영광군 백수읍 해안로 703 (카페 파라다이스)';
  const encodedAddress = encodeURIComponent(exactAddress);

  const handleTmapClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Automatically copy address for convenience
    navigator.clipboard?.writeText(exactAddress);

    const userAgent = navigator.userAgent || '';
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    if (isAndroid) {
      e.preventDefault();
      // Android Intent for TMAP app
      window.location.href = `intent://search?name=${encodedAddress}#Intent;scheme=tmap;package=com.skt.tmap.ku;end`;
    } else if (isIOS) {
      e.preventDefault();
      // iOS URL scheme for TMAP app
      window.location.href = `tmap://search?name=${encodedAddress}`;
    } else {
      // Desktop / Web environment: Direct TMAP protocol trigger
      window.location.href = `tmap://search?name=${encodedAddress}`;
    }
  };

  const navLinks = [
    {
      id: 'kakao-nav-btn',
      name: '카카오내비 / 맵',
      url: `https://map.kakao.com/link/search/${encodedAddress}`,
      color: 'bg-yellow-400 text-stone-900 hover:bg-yellow-300',
    },
    {
      id: 'naver-nav-btn',
      name: '네이버 지도',
      url: `https://map.naver.com/p/entry/place/1175028249`,
      color: 'bg-emerald-600 text-white hover:bg-emerald-500',
    },
    {
      id: 'tmap-nav-btn',
      name: '티맵 (TMAP)',
      url: `tmap://search?name=${encodedAddress}`,
      onClick: handleTmapClick,
      color: 'bg-blue-600 text-white hover:bg-blue-500',
    },
  ];

  return (
    <section id="location" className="py-20 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Location & Contact</span>
          </div>
          <h2 className="text-[1.15rem] xs:text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tighter sm:tracking-tight font-serif whitespace-nowrap">
            카페 파라다이스 <span className="text-amber-400">오시는 길 & 매장 정보</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            전남 영광 백수해안도로를 따라 시원하게 달리시다가 바다가 가장 아름답게 보이는 자갈마당으로 들어오시면 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Map Preview & Visual Road Card */}
          <div className="lg:col-span-6 bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Visual Map / Hero Thumbnail */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-stone-700 mb-6 bg-stone-950">
                <img
                  src={IMAGES.heroSunset}
                  alt="카페 파라다이스 위치 전경"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Map Pin Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-3.5 rounded-xl border border-stone-700 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{STORE_INFO.name}</div>
                      <div className="text-xs text-stone-400">{STORE_INFO.address}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-xs text-amber-400 font-bold rounded-lg border border-stone-700 flex items-center gap-1 shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '복사됨' : '주소복사'}</span>
                  </button>
                </div>
              </div>

              {/* Landmark Distances */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  주변 주요 명소와의 거리
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700/60 flex justify-between">
                    <span className="text-stone-300">영광노을전시관</span>
                    <span className="font-bold text-amber-400">차량 3분</span>
                  </div>
                  <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700/60 flex justify-between">
                    <span className="text-stone-300">백수해안도로 중심</span>
                    <span className="font-bold text-amber-400">도로변 위치</span>
                  </div>
                  <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700/60 flex justify-between">
                    <span className="text-stone-300">칠산타워·칠산대교</span>
                    <span className="font-bold text-amber-400">차량 12분</span>
                  </div>
                  <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700/60 flex justify-between">
                    <span className="text-stone-300">법성포 굴비거리</span>
                    <span className="font-bold text-amber-400">차량 15분</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation App Launcher Buttons */}
            <div>
              <div className="text-xs text-stone-400 mb-2 font-medium">
                원터치 내비게이션 길안내 연결:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    id={link.id}
                    href={link.url}
                    onClick={link.onClick}
                    target="_blank"
                    rel="noreferrer"
                    title={`${link.name}으로 ${fullDestination} 길안내 시작`}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-transform hover:scale-102 cursor-pointer ${link.color}`}
                  >
                    <Navigation className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Operational Details & Direct Call Card */}
          <div className="lg:col-span-6 bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold">
                  상세 매장 정보
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  연중무휴 영업 중
                </span>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>도로명 주소</span>
                  </div>
                  <p className="text-stone-200 text-sm">{STORE_INFO.address}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{STORE_INFO.addressDetail}</p>
                </div>

                <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
                    <Clock className="w-4 h-4" />
                    <span>영업 시간</span>
                  </div>
                  <div className="text-stone-200 text-sm space-y-0.5">
                    <div><span className="font-semibold text-white">평일:</span> 13:30 ~ 19:00 (일몰 시간에 따라 탄력적 연장 영업)</div>
                    <div><span className="font-semibold text-white">주말과 공휴일:</span> 9:30 ~ 20:00</div>
                  </div>
                  <p className="text-stone-400 text-xs mt-1.5">{STORE_INFO.notice}</p>
                </div>

                <div className="p-4 bg-stone-800/80 rounded-2xl border border-stone-700">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <Car className="w-4 h-4" />
                    <span>주차 & 편의 시설</span>
                  </div>
                  <p className="text-stone-200 text-sm">{STORE_INFO.parkingInfo}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{STORE_INFO.restroomInfo}</p>
                </div>
              </div>
            </div>

            {/* Direct Call Section */}
            <div className="p-5 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-500/40 rounded-2xl">
              <div className="text-xs text-amber-300 font-medium mb-1">
                자리 예약 문의 및 식사/디저트 사전 확인
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-white mb-3">
                {STORE_INFO.phone}
              </div>
              <a
                id="location-direct-call-btn"
                href="tel:010-5167-3516"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-transform hover:scale-102"
              >
                <Phone className="w-4 h-4" />
                <span>예약 및 문의 (010-5167-3516)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
