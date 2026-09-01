import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Star, Heart, Sparkles, ThumbsUp, MapPin, Quote, ExternalLink, Phone } from 'lucide-react';
import { INITIAL_REVIEWS, STORE_INFO } from '../data/cafeData';
import { GuestReview } from '../types';

export const GuestbookSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [likes, setLikes] = useState<{ [id: string]: number }>({
    'rev-1': 42,
    'rev-2': 38,
    'rev-3': 29,
    'rev-4': 24,
  });

  const tags = [
    { id: 'all', label: '전체 이야기' },
    { id: 'sunset', label: '🌅 노을 & 뷰 명당' },
    { id: 'food', label: '🍳 엄마표 손맛 요리' },
    { id: 'dessert', label: '🍪 수제 디저트' },
    { id: 'oasis', label: '🏪 해안도로 오아시스' },
  ];

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const filteredReviews = selectedTag === 'all'
    ? INITIAL_REVIEWS
    : INITIAL_REVIEWS.filter((r) => {
        if (selectedTag === 'sunset') return r.tag.includes('노을') || r.tag.includes('뷰');
        if (selectedTag === 'food') return r.tag.includes('돈가스') || r.tag.includes('닭발');
        if (selectedTag === 'dessert') return r.tag.includes('디저트');
        if (selectedTag === 'oasis') return r.tag.includes('오아시스') || r.tag.includes('주차');
        return true;
      });

  return (
    <section id="guestbook" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Visitor Stories & Warm Memories</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif break-keep">
            여행객들이 전하는 <span className="text-amber-400">파라다이스 이야기</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 break-keep">
            따뜻한 정성과 푸른 바다 앞 자갈마당에서 머문 소중한 추억들을 모았습니다.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                selectedTag === tag.id
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredReviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 sm:p-7 bg-stone-950/90 border border-stone-800 rounded-3xl hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Quote decoration */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      {rev.author.slice(0, 1)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">
                          {rev.author}
                        </span>
                        <span className="text-[11px] text-stone-400 px-2 py-0.5 bg-stone-800 rounded-full">
                          {rev.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[11px] text-stone-500 ml-1.5">{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-amber-400 font-semibold px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full shrink-0">
                    #{rev.tag}
                  </span>
                </div>

                <div className="relative pl-1 mb-4">
                  <Quote className="w-5 h-5 text-amber-500/20 absolute -top-1 -left-2 rotate-180" />
                  <p className="text-stone-200 text-sm sm:text-base leading-relaxed pl-4">
                    {rev.content}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-800/80 text-xs text-stone-400">
                <span className="text-[11px] text-stone-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  실제 방문객 인증 후기
                </span>
                <button
                  onClick={() => handleLike(rev.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-400 text-xs font-semibold transition-colors active:scale-95"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>공감 {likes[rev.id] || rev.likes}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visitor Inquiry Note */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-950/40 via-stone-900 to-orange-950/40 border border-amber-500/30 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>따뜻한 환영과 정성으로 맞이합니다</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              소중한 발걸음을 해주시는 모든 여행객분들께 감사드립니다
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
              영광 백수해안도로의 시원한 바다와 붉은 노을, 그리고 부모님의 정성 가득한 손맛 요리로 편안한 휴식을 선물해 드립니다. 단체 방문이나 자리 문의는 언제든 편하게 전화 주세요.
            </p>
          </div>

          <a
            id="guestbook-call-btn"
            href={`tel:${STORE_INFO.phone}`}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold rounded-2xl text-sm flex items-center gap-2 shrink-0 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>매장 전화 문의 ({STORE_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};

