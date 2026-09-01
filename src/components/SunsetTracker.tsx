import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Sunset, Clock, Sparkles, Camera, MapPin, Calendar, Volume2 } from 'lucide-react';
import { IMAGES } from '../data/cafeData';

export const SunsetTracker: React.FC<{ onOpenMusic: () => void }> = ({ onOpenMusic }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate approximate sunset in Yeonggwang by month
  const month = currentTime.getMonth() + 1; // 1-12
  const getSunsetTimeByMonth = (m: number) => {
    if (m >= 6 && m <= 8) return { hour: 19, minute: 30, season: '여름' };
    if (m >= 4 && m <= 5) return { hour: 19, minute: 0, season: '봄' };
    if (m >= 9 && m <= 10) return { hour: 18, minute: 15, season: '가을' };
    return { hour: 17, minute: 30, season: '겨울' };
  };

  const { hour: sunsetHour, minute: sunsetMinute, season } = getSunsetTimeByMonth(month);

  const getSunsetStatus = () => {
    const now = currentTime;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const sunsetMinutes = sunsetHour * 60 + sunsetMinute;
    const diff = sunsetMinutes - currentMinutes;

    if (diff > 120) {
      const hoursLeft = Math.floor(diff / 60);
      const minsLeft = diff % 60;
      return {
        phase: 'day',
        title: '낮 시간대 푸른 바다 감상 중',
        badge: '시원한 오션뷰',
        desc: `오늘 영광 일몰까지 약 ${hoursLeft}시간 ${minsLeft}분 남았습니다.`,
        tip: '낮에는 맑고 푸른 서해 바다와 시원한 음료를 즐겨보세요.',
      };
    } else if (diff > 0) {
      return {
        phase: 'golden',
        title: '✨ 골든 아워 진입! 일몰 카운트다운',
        badge: '인생샷 황금시간',
        desc: `일몰 시작까지 약 ${diff}분 남았습니다! 은은한 파도 소리와 붉은 노을빛이 번지는 야외 테라스와 자갈마당으로 나가보세요.`,
        tip: '하늘이 붉게 물드는 황금 시간입니다. 옥상 뷰를 추천합니다.',
      };
    } else if (diff > -60) {
      return {
        phase: 'sunset',
        title: '🌅 환상적인 서해안 노을 절정 시간!',
        badge: '노을 1열 직관 중',
        desc: '지금 바다와 하늘이 붉게 타오르는 순간입니다.',
        tip: '감성 음악과 함께 노을빛 자갈마당에서 인생샷을 남겨보세요.',
      };
    } else {
      return {
        phase: 'twilight',
        title: '낭만적인 밤바다 & 야간 조명',
        badge: '나이트 오션뷰',
        desc: '어두워진 서해 바다와 테라스 조명이 낭만을 더합니다.',
        tip: '밤바다 파도 소리를 들으며 맛있는 식사와 차 한잔을 즐겨보세요.',
      };
    }
  };

  const status = getSunsetStatus();

  return (
    <section id="sunset" className="py-20 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Background visual glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sunset className="w-4 h-4" />
            <span>Yeonggwang Sunset & Golden Hour</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
            영광 백수해안도로 <span className="text-orange-400">일몰 & 노을 감상</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            한국의 아름다운 길 100선 백수해안도로에서 가장 아름다운 순간을 카페 파라다이스에서 만끽하세요.
          </p>
        </div>

        {/* Sunset Live Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/90 border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-8">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-orange-500 text-stone-950 font-bold text-xs">
                {status.badge}
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                영광군 백수읍 해안도로 실시간 기준 ({season}철)
              </span>
            </div>

            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight sm:leading-snug tracking-tight">
              {status.title}
            </h3>

            <p className="text-stone-300 text-xs sm:text-base leading-relaxed break-keep">
              {status.desc}
            </p>

            {/* Sunset Time Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-stone-800/90 border border-stone-700 p-3.5 rounded-2xl">
                <div className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  골든아워 시작
                </div>
                <div className="text-lg font-extrabold text-amber-300">
                  {sunsetHour - 1}:{String(sunsetMinute + 25).padStart(2, '0')} 전후
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">황금빛 노을 감상</div>
              </div>

              <div className="bg-stone-800/90 border border-orange-500/40 p-3.5 rounded-2xl bg-orange-500/5">
                <div className="text-xs text-orange-400 flex items-center gap-1 mb-1">
                  <Sunset className="w-3.5 h-3.5 text-orange-400" />
                  일몰 절정 시각
                </div>
                <div className="text-lg font-extrabold text-orange-400">
                  {sunsetHour}:{String(sunsetMinute).padStart(2, '0')} ~ {sunsetHour}:{String(Math.min(59, sunsetMinute + 20)).padStart(2, '0')}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">수평선 붉은 낙조</div>
              </div>

              <div className="bg-stone-800/90 border border-stone-700 p-3.5 rounded-2xl col-span-2 sm:col-span-1">
                <div className="text-xs text-stone-400 flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  매직아워(황혼)
                </div>
                <div className="text-lg font-extrabold text-rose-300">
                  일몰 후 30분간
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">보랏빛 하늘 & 테라스</div>
              </div>
            </div>

            {/* Practical Tip */}
            <div className="p-3.5 sm:p-4 bg-orange-950/40 border border-orange-800/50 rounded-2xl flex items-start gap-2.5 sm:gap-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-stone-200 leading-snug sm:leading-relaxed">
                <span className="block sm:inline font-bold text-orange-300 mr-1.5">
                  파라다이스 노을 꿀팁:
                </span>
                <span className="block sm:inline text-stone-300 break-keep">
                  {status.tip}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="sunset-music-btn"
                onClick={onOpenMusic}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/40 text-orange-300 text-xs sm:text-sm font-semibold transition-all"
              >
                <Volume2 className="w-4 h-4" />
                <span>야외 바다 감성 음악 & 파도 소리 함께 듣기</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image & Photo Spots */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-stone-700 shadow-xl">
              <img
                src={IMAGES.heroSunset}
                alt="영광 백수해안도로 노을 파라다이스 카페"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-orange-300">PARADISE PHOTO SPOT</div>
                <div className="text-sm sm:text-base font-bold">자갈마당 파라솔 벤치에서 담는 노을 인생샷</div>
              </div>
            </div>

            {/* 3 Recommended Photo Spots */}
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80 flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">포토존 1: 자갈마당 파라솔 벤치</span>
                  <p className="text-stone-400 text-[11px]">바다 수평선과 파라솔을 프레임으로 걸고 찍는 감성 샷</p>
                </div>
              </div>

              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80 flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">포토존 2: 1층 옥상 루프탑 테라스</span>
                  <p className="text-stone-400 text-[11px]">하늘과 맞닿은 360도 탁 트인 서해안 붉은 낙조 파노라마</p>
                </div>
              </div>

              <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/80 flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">포토존 3: 통유리 실내 창가 좌석</span>
                  <p className="text-stone-400 text-[11px]">커피잔과 함께 노을빛이 비치는 테이블 감성 사진</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Season Evergreen Reference Table */}
        <div className="p-4 sm:p-6 bg-stone-900/80 border border-stone-800 rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className="text-sm sm:text-base font-bold text-white">사계절 영광 백수해안도로 일몰 시간표</h4>
            </div>
            <span className="text-xs text-stone-400 font-normal pl-6 sm:pl-0">※ 계절별 방문 추천 시간대</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className={`p-3.5 rounded-2xl border ${season === '봄' ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-stone-800/60 border-stone-700/60 text-stone-300'}`}>
              <div className="text-sm sm:text-base font-bold text-white mb-1.5 break-keep leading-snug">🌸 봄철 <span className="text-xs font-normal text-stone-300 sm:text-sm">(3월~5월)</span></div>
              <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wide">18:40 ~ 19:20</div>
              <div className="text-[11px] text-stone-400 mt-1 break-keep leading-tight">포근한 봄바람 & 선셋</div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${season === '여름' ? 'bg-orange-500/10 border-orange-500/40 text-orange-300' : 'bg-stone-800/60 border-stone-700/60 text-stone-300'}`}>
              <div className="text-sm sm:text-base font-bold text-white mb-1.5 break-keep leading-snug">☀️ 여름철 <span className="text-xs font-normal text-stone-300 sm:text-sm">(6월~8월)</span></div>
              <div className="text-xs sm:text-sm font-semibold text-orange-400 tracking-wide">19:20 ~ 19:50</div>
              <div className="text-[11px] text-stone-400 mt-1 break-keep leading-tight">붉고 화려한 여름 낙조</div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${season === '가을' ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-stone-800/60 border-stone-700/60 text-stone-300'}`}>
              <div className="text-sm sm:text-base font-bold text-white mb-1.5 break-keep leading-snug">🍁 가을철 <span className="text-xs font-normal text-stone-300 sm:text-sm">(9월~11월)</span></div>
              <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wide">17:40 ~ 18:30</div>
              <div className="text-[11px] text-stone-400 mt-1 break-keep leading-tight">가장 맑고 짙은 황혼</div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${season === '겨울' ? 'bg-blue-500/10 border-blue-500/40 text-blue-300' : 'bg-stone-800/60 border-stone-700/60 text-stone-300'}`}>
              <div className="text-sm sm:text-base font-bold text-white mb-1.5 break-keep leading-snug">❄️ 겨울철 <span className="text-xs font-normal text-stone-300 sm:text-sm">(12월~2월)</span></div>
              <div className="text-xs sm:text-sm font-semibold text-blue-400 tracking-wide">17:20 ~ 17:50</div>
              <div className="text-[11px] text-stone-400 mt-1 break-keep leading-tight">통유리창 따뜻한 온기</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

