import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, MapPin, Navigation, Car, Sparkles, Clock, ExternalLink } from 'lucide-react';
import { DRIVE_COURSES } from '../data/cafeData';

export const TravelCourseSection: React.FC<{ onNavigateLocation: () => void }> = ({
  onNavigateLocation,
}) => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const course = DRIVE_COURSES[selectedCourse];

  return (
    <section id="course" className="py-20 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Yeonggwang Travel Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
            영광 백수해안도로 <span className="text-amber-400">추천 드라이브 코스</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            한국의 아름다운 길 100선 백수해안도로와 영광 주요 명소를 알차게 즐기는 여행 코스를 안내해 드립니다.
          </p>
        </div>

        {/* Course Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto">
          {DRIVE_COURSES.map((c, idx) => (
            <button
              key={c.id}
              id={`course-tab-${idx}`}
              onClick={() => setSelectedCourse(idx)}
              className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                selectedCourse === idx
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-lg'
                  : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">
                {idx === 0 ? (
                  <>
                    <span className="hidden sm:inline">영광 백수해안도로 </span>낭만 노을 코스
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">영광 </span>미식 & 힐링 코스
                  </>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Course Detail Card */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold">
                {course.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {course.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-400 bg-stone-800 px-3.5 py-2 rounded-xl border border-stone-700">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Stepper Timeline with Photos & Map Links */}
          <div
            className={`py-8 grid grid-cols-1 sm:grid-cols-2 ${
              course.spots.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
            } gap-4 relative`}
          >
            {course.spots.map((spot, sIdx) => (
              <div
                key={sIdx}
                className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden group ${
                  spot.isParadise
                    ? 'bg-gradient-to-b from-amber-950/60 to-stone-900 border-amber-500 shadow-xl shadow-amber-500/10'
                    : 'bg-stone-800/80 border-stone-700/80 hover:border-stone-600'
                }`}
              >
                {/* Spot Photo Area */}
                {spot.image && (
                  <div className="relative h-32 w-full overflow-hidden bg-stone-950">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/40" />
                    <span
                      className={`absolute top-2.5 left-2.5 w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center shadow-md ${
                        spot.isParadise
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-900/90 text-stone-200 border border-stone-700'
                      }`}
                    >
                      {sIdx + 1}
                    </span>
                    {spot.isParadise && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-amber-500 text-stone-950 font-bold text-[10px] rounded-full shadow">
                        ★ 핵심 힐링 스팟
                      </span>
                    )}
                  </div>
                )}

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {!spot.image && (
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center ${
                            spot.isParadise
                              ? 'bg-amber-500 text-stone-950'
                              : 'bg-stone-700 text-stone-300'
                          }`}
                        >
                          {sIdx + 1}
                        </span>
                        {spot.isParadise && (
                          <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-bold text-[10px] rounded-full animate-pulse">
                            ★ 핵심 힐링 스팟
                          </span>
                        )}
                      </div>
                    )}
                    <h4
                      className={`font-bold text-sm sm:text-base mb-1.5 break-keep ${
                        spot.isParadise ? 'text-amber-400 font-extrabold' : 'text-white'
                      }`}
                    >
                      {spot.name}
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed break-keep">
                      {spot.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-700/50 flex items-center justify-between gap-2">
                    {spot.mapUrl ? (
                      <a
                        href={spot.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span>지도에서 위치보기</span>
                        <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-70" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-stone-500">위치 안내</span>
                    )}

                    {spot.isParadise && (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                        자갈마당 & 노을
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Tip Banner */}
          <div className="p-4 rounded-2xl bg-stone-800/90 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-stone-200">
                <strong className="text-amber-400">드라이브 팁:</strong> {course.tip}
              </div>
            </div>
            <button
              onClick={onNavigateLocation}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-xl shrink-0 transition-colors"
            >
              파라다이스 위치 확인
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
