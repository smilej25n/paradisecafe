import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Utensils,
  Coffee,
  Cookie,
  Store,
  Sparkles,
  Heart,
  ShoppingBag,
  Phone,
  Plus,
  Minus,
  Trash2,
  Check,
  AlertCircle,
} from 'lucide-react';
import { MENU_ITEMS, STORE_INFO, IMAGES } from '../data/cafeData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  initialCategory?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [cart, setCart] = useState<{ item: MenuItem; count: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCopiedOrder, setIsCopiedOrder] = useState(false);

  const categories = [
    { id: 'all', label: '전체 메뉴', icon: Sparkles },
    { id: 'food', label: '🍳 엄마표 식사·안주', icon: Utensils, highlight: true },
    { id: 'coffee', label: '☕ 커피·생과일음료', icon: Coffee },
    { id: 'dessert', label: '🍪 시그니처 수제디저트', icon: Cookie, special: true },
    { id: 'mart', label: '🏪 캔맥주·스낵·담배', icon: Store, oasis: true },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id ? { ...entry, count: entry.count + 1 } : entry
        );
      }
      return [...prev, { item, count: 1 }];
    });
  };

  const updateCount = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newCount = entry.count + delta;
            return newCount > 0 ? { ...entry, count: newCount } : null;
          }
          return entry;
        })
        .filter(Boolean) as { item: MenuItem; count: number }[]
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const totalAmount = cart.reduce((sum, entry) => sum + entry.item.price * entry.count, 0);
  const totalCount = cart.reduce((sum, entry) => sum + entry.count, 0);

  const handleCopyOrder = () => {
    if (cart.length === 0) return;
    const text = `[카페 파라다이스 주문/포장 문의]\n` +
      cart.map((c) => `- ${c.item.name} x ${c.count}개 (${(c.item.price * c.count).toLocaleString()}원)`).join('\n') +
      `\n\n총 금액: ${totalAmount.toLocaleString()}원\n방문 예정입니다!`;
    navigator.clipboard.writeText(text);
    setIsCopiedOrder(true);
    setTimeout(() => setIsCopiedOrder(false), 3000);
  };

  return (
    <section id="menu" className="py-20 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Paradise Delicious Menu</span>
          </div>
          <h2 className="text-[1.15rem] xs:text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tighter sm:tracking-tight font-serif whitespace-nowrap">
            정성 가득한 <span className="text-amber-400">카페 파라다이스 메뉴</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base mt-2">
            엄마표 손맛 식사부터 신선한 커피·음료, 수제 구움과자 및 해안도로 편의점 품목까지 함께합니다.
          </p>
        </div>

        {/* Sister's Special Dessert Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/60 via-stone-900 to-orange-950/60 border border-amber-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/20">
                  시그니처 수제 베이커리
                </span>
                <span className="text-xs text-stone-400">당일 한정 수량 판매</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm mt-1">
                프랑스식 <strong>바삭 아몬드 튀일(Tuile)</strong>, 프리미엄 버터 <strong>마들렌</strong>, 수제 <strong>초코칩 르뱅쿠키</strong>를 정성껏 구워 선보입니다.
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedCategory('dessert')}
            className="self-end sm:self-center px-3.5 py-1.5 bg-amber-500 text-stone-950 text-xs font-bold rounded-lg hover:bg-amber-400 shrink-0 transition-colors"
          >
            디저트 보기
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Operation Reassurance Note */}
        <div className="max-w-4xl mx-auto mb-10 text-center px-3 sm:px-4">
          <div className="text-xs sm:text-sm text-stone-300 bg-stone-900/80 border border-stone-800 rounded-xl px-4 py-2.5 inline-block sm:inline-flex items-center justify-center gap-1.5 shadow-sm text-center leading-relaxed">
            <span className="block sm:inline">
              <span className="mr-1">📢</span>
              <span className="text-amber-400 font-bold mr-1">안내:</span>
              <span>신선한 재료로 정성껏 준비하며,</span>
            </span>{' '}
            <span className="block sm:inline text-stone-200">
              단체 및 식사 문의는 직통전화({STORE_INFO.phone})로 편하게 연락주세요.
            </span>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 p-5 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                {/* Image if available */}
                {item.image && (
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-stone-950 shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Badges without image */}
                {!item.image && item.badge && (
                  <div className="mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Title & Price */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-base sm:text-lg font-extrabold text-amber-400 shrink-0">
                    {item.price.toLocaleString()}원
                  </span>
                </div>

                {/* Description */}
                <p className="text-stone-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-stone-800 text-[11px] text-stone-400 border border-stone-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Tray Button */}
              <button
                id={`add-tray-${item.id}`}
                onClick={() => addToCart(item)}
                className="w-full py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>담기 / 가상 주문표</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Floating Cart / Tray Drawer Trigger */}
        {totalCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              id="open-tray-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-transform"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-stone-950 text-amber-400 w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-extrabold">
                  {totalCount}
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs text-stone-900 font-semibold">내 주문 트레이</div>
                <div className="text-sm font-extrabold">{totalAmount.toLocaleString()}원</div>
              </div>
            </button>
          </div>
        )}

        {/* Modal: Virtual Order Tray */}
        <AnimatePresence>
          {isCartOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-stone-900 border border-stone-700 w-full max-w-lg rounded-3xl p-6 shadow-2xl text-white max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-bold">선택한 메뉴 ({totalCount}개)</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-stone-400 hover:text-white p-1"
                  >
                    닫기
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto py-4 space-y-3">
                  {cart.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-white truncate">
                          {entry.item.name}
                        </div>
                        <div className="text-xs text-amber-400 mt-0.5">
                          {entry.item.price.toLocaleString()}원
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCount(entry.item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-stone-700 text-stone-200 hover:bg-stone-600 flex items-center justify-center"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-sm w-5 text-center">
                          {entry.count}
                        </span>
                        <button
                          onClick={() => updateCount(entry.item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-stone-700 text-stone-200 hover:bg-stone-600 flex items-center justify-center"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeFromCart(entry.item.id)}
                          className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 flex items-center justify-center ml-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total & Action */}
                <div className="pt-4 border-t border-stone-800 space-y-3">
                  <div className="flex items-center justify-between text-base">
                    <span className="text-stone-400 font-medium">예상 총 금액</span>
                    <span className="text-xl font-extrabold text-amber-400">
                      {totalAmount.toLocaleString()}원
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      id="copy-order-btn"
                      onClick={handleCopyOrder}
                      className="py-3 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-stone-700"
                    >
                      {isCopiedOrder ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">복사 완료!</span>
                        </>
                      ) : (
                        <span>주문 내역 복사하기</span>
                      )}
                    </button>

                    <a
                      id="call-order-btn"
                      href={`tel:${STORE_INFO.phone}`}
                      className="py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>포장/방문 전화 문의</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-400 text-center">
                    * 전화 시 메뉴와 도착 예정 시간을 미리 말씀해주시면 더욱 빠르게 준비해 드립니다.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
