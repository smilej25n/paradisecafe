import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, UtensilsCrossed, Store, Cookie, CheckCircle2, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/cafeData';

interface KeyStrengthsProps {
  onNavigateMenu: (category?: string) => void;
}

export const KeyStrengths: React.FC<KeyStrengthsProps> = ({ onNavigateMenu }) => {
  const strengths = [
    {
      id: 'mart-oasis',
      tag: '해안도로의 단비 같은 쉼터',
      title: '담배 판매처 & 시원한 맥주·과자 완비',
      badge: '여행객 필수 체크',
      description:
        '영광 백수해안도로 특성상 인근에 편의점이나 마트가 거의 없습니다. 카페 파라다이스에서는 시원한 캔맥주, 스낵 과자, 탄산음료, 그리고 정식 허가 담배까지 마트처럼 편하게 구매하실 수 있습니다.',
      image: IMAGES.snackMart,
      points: [
        '해안도로 인근에서 찾기 힘든 담배 정식 판매',
        '노을 보며 즐기는 얼음장 캔맥주 & 병맥주',
        '차량 간식 및 아이들을 위한 다양한 스낵 과자류',
        '출출할 때 즉석에서 끓여 먹는 얼큰 라면',
      ],
      actionLabel: '편의 & 맥주 품목 보기',
      categoryTarget: 'mart',
      highlightColor: 'from-amber-600/20 to-orange-600/20 border-amber-500/40',
    },
    {
      id: 'mom-food',
      tag: '엄마의 정성과 솜씨',
      title: '바삭 수제돈가스 & 매콤 닭발볶음',
      badge: '든든한 식사 & 안주',
      description:
        '단순한 음료만 파는 카페가 아닙니다. 솜씨 좋은 어머니가 직접 두드려 튀겨낸 바삭한 수제돈가스, 불향 가득 매콤 닭발볶음, 묵은지 햄야채 김치볶음밥까지 든든하게 대접합니다.',
      image: IMAGES.homemadeFood,
      points: [
        '국내산 생등심으로 직접 만드는 수제 바삭 돈가스',
        '시원한 맥주와 환상 궁합인 매콤 불 닭발볶음',
        '잘 익은 묵은지와 계란후라이가 올라간 김치볶음밥',
        '노을 지는 야외 테라스에서 즐기는 최고의 식사',
      ],
      actionLabel: '엄마손맛 식사 메뉴 보기',
      categoryTarget: 'food',
      highlightColor: 'from-rose-600/20 to-orange-600/20 border-rose-500/40',
    },
    {
      id: 'terrace-view',
      tag: '서해안 최고의 일몰 명당',
      title: '자갈마당 파라솔 5석 & 옥상 루프탑',
      badge: '감성 음악 & 뷰',
      description:
        '부모님이 손수 자갈을 깔아 정성스레 가꾼 넓은 마당에 파라솔과 벤치 5석이 바다를 정면으로 마주하고 있습니다. 1층 옥상 루프탑 테라스와 실내 10개 통유리 테이블에서도 탁 트인 노을을 감상하실 수 있습니다.',
      image: IMAGES.gravelTerrace,
      points: [
        '바닷바람과 함께 야외로 은은히 울려 퍼지는 감성 음악',
        '자갈마당 벤치 5석 & 루프탑 360도 오션뷰',
        '통유리창 실내 10석으로 날씨 상관없이 쾌적',
        '인생샷 명소로 손꼽히는 서해 골든아워 선셋',
      ],
      actionLabel: '공간 & 테라스 사진 보기',
      categoryTarget: 'coffee',
      highlightColor: 'from-amber-600/20 to-yellow-600/20 border-amber-400/40',
    },
    {
      id: 'sister-dessert',
      tag: '바다 앞 달콤한 휴식',
      title: '바삭 아몬드 튀일 & 수제 마들렌',
      badge: '시그니처 수제 베이커리',
      description:
        '정성껏 직접 구워낸 프랑스식 프리미엄 수제 구움과자를 선보입니다. 바삭하고 고소한 견과류 튀일과 버터향 솔솔 나는 마들렌, 꾸덕한 쿠키로 달콤한 쉼을 더해보세요.',
      image: IMAGES.bakeryDessert,
      points: [
        '프랑스 전통 방식으로 구운 고소한 아몬드 튀일',
        '프리미엄 발효 버터로 완성한 촉촉한 마들렌',
        '초콜릿과 견과류 듬뿍 르뱅 스타일 수제 쿠키',
        '매장 수제 디저트 라인업 상시 안내',
      ],
      actionLabel: '수제 디저트 라인업 보기',
      categoryTarget: 'dessert',
      highlightColor: 'from-orange-600/20 to-amber-600/20 border-orange-400/40',
    },
  ];

  return (
    <section id="strengths" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Paradise Cafe</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
            여행객들이 다시 찾아오는 <br className="sm:hidden" />
            <span className="text-amber-400">카페 파라다이스만의 4가지 매력</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3">
            단순한 카페를 넘어, 영광 해안도로를 달리는 모든 분들의 든든하고 아늑한 안식처가 되어드립니다.
          </p>
        </div>

        {/* 4 Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {strengths.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl bg-stone-800/90 border ${item.highlightColor} p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group`}
            >
              <div>
                {/* Top Tags & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-700 text-stone-200 border border-stone-600">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Image Thumbnail */}
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-5 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <p className="text-stone-300 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                id={`strength-btn-${item.id}`}
                onClick={() => onNavigateMenu(item.categoryTarget)}
                className="w-full py-3 px-4 bg-stone-700/80 hover:bg-amber-500 hover:text-stone-950 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all group-hover:shadow-md"
              >
                <span>{item.actionLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
