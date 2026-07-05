import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [openCategory, setOpenCategory] = useState<'modeling' | 'aigc' | 'detail' | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const lastScrollTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Independent card carousel lists
  const modelingItems = portfolioItems.filter(item => item.category === 'modeling');
  const aigcItems = portfolioItems.filter(item => item.category === 'aigc');
  const detailItems = portfolioItems.filter(item => item.category === 'detail');

  // Independent active indices for the three card carousels
  const [modelingIndex, setModelingIndex] = useState(0);
  const [aigcIndex, setAigcIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);

  // Hover states to pause autoplay on the active card
  const [hoveredCard, setHoveredCard] = useState<'modeling' | 'aigc' | 'detail' | null>(null);

  // Autoplay intervals (paused on hover)
  useEffect(() => {
    let mTimer: any;
    let aTimer: any;
    let dTimer: any;

    if (hoveredCard !== 'modeling' && modelingItems.length > 0) {
      mTimer = setInterval(() => {
        setModelingIndex((prev) => (prev + 1) % modelingItems.length);
      }, 4500);
    }
    if (hoveredCard !== 'aigc' && aigcItems.length > 0) {
      aTimer = setInterval(() => {
        setAigcIndex((prev) => (prev + 1) % aigcItems.length);
      }, 5000);
    }
    if (hoveredCard !== 'detail' && detailItems.length > 0) {
      dTimer = setInterval(() => {
        setDetailIndex((prev) => (prev + 1) % detailItems.length);
      }, 4800);
    }

    return () => {
      clearInterval(mTimer);
      clearInterval(aTimer);
      clearInterval(dTimer);
    };
  }, [hoveredCard, modelingItems.length, aigcItems.length, detailItems.length]);

  // Get the filtered array of items for the opened category
  const categoryItems = openCategory
    ? portfolioItems.filter(item => item.category === openCategory)
    : [];

  const categoryImages = categoryItems.map(item => item.image);

  const handleOpenCategory = (catId: 'modeling' | 'aigc' | 'detail', startIndex: number = 0) => {
    setOpenCategory(catId);
    setCurrentImgIndex(startIndex);
  };

  const handleNext = () => {
    if (!categoryImages.length) return;
    setCurrentImgIndex((prev) => (prev + 1) % categoryImages.length);
  };

  const handlePrev = () => {
    if (!categoryImages.length) return;
    setCurrentImgIndex((prev) => (prev - 1 + categoryImages.length) % categoryImages.length);
  };

  // Wheel interaction (mouse scrolling)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const now = Date.now();
    // Debounce to prevent rapid double-scrolling
    if (now - lastScrollTime.current < 650) return;

    if (e.deltaY > 0) {
      handleNext();
      lastScrollTime.current = now;
    } else if (e.deltaY < 0) {
      handlePrev();
      lastScrollTime.current = now;
    }
  };

  // Touch interaction (mobile swipe up/down)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    const now = Date.now();
    if (now - lastScrollTime.current < 650) return;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped up -> Next image
        handleNext();
        lastScrollTime.current = now;
      } else {
        // Swiped down -> Prev image
        handlePrev();
        lastScrollTime.current = now;
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openCategory) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setOpenCategory(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openCategory, categoryImages.length]);

  return (
    <section 
      id="portfolio" 
      className="min-h-screen py-24 px-6 sm:px-12 bg-[#FAFAFA] relative flex flex-col justify-center select-none"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* 1. Header Row (Selected Works) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 tracking-widest uppercase">
              ( SELECTED WORKS )
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-neutral-900 tracking-tight mt-2">
              作品案例
            </h2>
          </div>
          
          <div className="hidden md:block self-end pb-1.5">
            <span className="font-sans text-[13px] text-neutral-400 font-light tracking-wide">
              三个方向 · 多元表达 · 从概念到落地的完整设计实践
            </span>
          </div>
        </div>

        {/* 2. Three Column Category Showcase Grid (Three Independent Modular Carousels) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Module 1: 建模渲染 (3D Modeling & Rendering) */}
          <motion.div
            onClick={() => handleOpenCategory('modeling', modelingIndex)}
            onMouseEnter={() => setHoveredCard('modeling')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] overflow-hidden bg-[#F2F2F4] flex flex-col justify-between p-6 sm:p-8 aspect-[4/5] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Visual / Image Area (Carousel) */}
            <div className="relative w-full h-[58%] rounded-[18px] overflow-hidden flex items-center justify-center bg-transparent group/image">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={modelingIndex}
                  src={modelingItems[modelingIndex]?.image} 
                  alt={modelingItems[modelingIndex]?.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                />
              </AnimatePresence>

              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setModelingIndex((prev) => (prev - 1 + modelingItems.length) % modelingItems.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-neutral-950/60 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>

              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setModelingIndex((prev) => (prev + 1) % modelingItems.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-neutral-950/60 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>

              {/* Numeric indicator */}
              <div className="absolute bottom-3 right-3 bg-neutral-950/60 text-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-medium select-none z-10">
                {String(modelingIndex + 1).padStart(2, '0')} / {String(modelingItems.length).padStart(2, '0')}
              </div>
            </div>

            {/* Info Overlay */}
            <div className="text-left mt-4 flex flex-col justify-end">
              <span className="text-[9px] font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                3D MODELING & RENDERING
              </span>
              
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                  建模渲染
                </h3>
                
                <div className="p-1.5 rounded-full bg-neutral-950/5 text-neutral-950 group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module 2: AIGC 赋能 (AI-Generated Content) */}
          <motion.div
            onClick={() => handleOpenCategory('aigc', aigcIndex)}
            onMouseEnter={() => setHoveredCard('aigc')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] overflow-hidden bg-[#E3EFF7] flex flex-col justify-between p-6 sm:p-8 aspect-[4/5] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Visual / Image Area (Carousel) */}
            <div className="relative w-full h-[58%] rounded-[18px] overflow-hidden flex items-center justify-center bg-transparent group/image">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={aigcIndex}
                  src={aigcItems[aigcIndex]?.image} 
                  alt={aigcItems[aigcIndex]?.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                />
              </AnimatePresence>

              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setAigcIndex((prev) => (prev - 1 + aigcItems.length) % aigcItems.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-neutral-950/60 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>

              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setAigcIndex((prev) => (prev + 1) % aigcItems.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/40 text-white backdrop-blur-md border border-white/10 hover:bg-neutral-950/60 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>

              {/* Numeric indicator */}
              <div className="absolute bottom-3 right-3 bg-neutral-950/60 text-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-medium select-none z-10">
                {String(aigcIndex + 1).padStart(2, '0')} / {String(aigcItems.length).padStart(2, '0')}
              </div>
            </div>

            {/* Info Overlay */}
            <div className="text-left mt-4 flex flex-col justify-end">
              <span className="text-[9px] font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                AI-GENERATED CONTENT
              </span>
              
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                  AIGC 赋能
                </h3>
                
                <div className="p-1.5 rounded-full bg-neutral-950/5 text-neutral-950 group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module 3: 详情页 (Product Detail Pages) */}
          <motion.div
            onClick={() => handleOpenCategory('detail', detailIndex)}
            onMouseEnter={() => setHoveredCard('detail')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] overflow-hidden bg-gradient-to-b from-[#251E1A] to-[#120F0D] flex flex-col justify-between p-6 sm:p-8 aspect-[4/5] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Visual / Image Area (Carousel) */}
            <div className="relative w-full h-[58%] rounded-[18px] overflow-hidden flex items-center justify-center bg-transparent group/image">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={detailIndex}
                  src={detailItems[detailIndex]?.image} 
                  alt={detailItems[detailIndex]?.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                />
              </AnimatePresence>

              {/* Prev Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setDetailIndex((prev) => (prev - 1 + detailItems.length) % detailItems.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/10 hover:bg-white/40 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>

              {/* Next Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setDetailIndex((prev) => (prev + 1) % detailItems.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/10 hover:bg-white/40 opacity-0 group-hover/image:opacity-100 hover:scale-105 active:scale-95 transition-all z-20 shadow-md cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>

              {/* Numeric indicator */}
              <div className="absolute bottom-3 right-3 bg-white/15 text-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-medium select-none z-10">
                {String(detailIndex + 1).padStart(2, '0')} / {String(detailItems.length).padStart(2, '0')}
              </div>
            </div>

            {/* Info Overlay */}
            <div className="text-left mt-4 flex flex-col justify-end">
              <span className="text-[9px] font-mono font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                PRODUCT DETAIL PAGES
              </span>
              
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  详情页
                </h3>
                
                <div className="p-1.5 rounded-full bg-white/10 text-white group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* 3. FULL-SCREEN LIGHTBOX MODAL WITH MOUSE WHEEL ROTATION, ARROW KEYS, AND FLOATING DETAILS */}
      <AnimatePresence>
        {openCategory && (() => {
          const currentItem = categoryItems[currentImgIndex];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/98 backdrop-blur-md z-100 flex flex-col items-center justify-center p-4 sm:p-8"
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={() => setOpenCategory(null)}
            >
              {/* Minimal semi-transparent floating Close button on top-right */}
              <div className="absolute top-6 right-6 z-110">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCategory(null);
                  }}
                  className="p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all cursor-pointer backdrop-blur-xs hover:scale-105 active:scale-95 border border-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Invisible Scroll Wheel prompt instructions overlay - fades out after entrance */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 0.8, 0.8, 0] }}
                transition={{ duration: 3.5, times: [0, 0.15, 0.85, 1] }}
                className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-white/50 text-[11px] font-sans tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5"
              >
                ⌨ 使用鼠标滚轮 或 方向键 切换作品图片
              </motion.div>

              {/* Left Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/12 text-white/50 hover:text-white transition-all cursor-pointer border border-white/5 z-10 hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/12 text-white/50 hover:text-white transition-all cursor-pointer border border-white/5 z-10 hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Interactive Stage with clean frame */}
              <div className="relative max-w-7xl w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIndex}
                    src={categoryImages[currentImgIndex]}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    referrerPolicy="no-referrer"
                    className="max-w-[90vw] max-h-[72vh] sm:max-h-[80vh] object-contain select-none shadow-2xl rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AnimatePresence>
              </div>

              {/* Floating metadata panel (bottom-left) removed per request */}

              {/* Minimal Indicators at the bottom - Pure aesthetic dots */}
              <div 
                className="absolute bottom-8 right-6 sm:left-1/2 sm:-translate-x-1/2 flex items-center gap-1.5 sm:gap-2.5 z-10 select-none pointer-events-auto bg-white/5 py-1.5 px-3 rounded-full border border-white/5"
                onClick={(e) => e.stopPropagation()}
              >
                {categoryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImgIndex 
                        ? 'bg-white scale-125 w-2 sm:w-3' 
                        : 'bg-white/20 hover:bg-white/45'
                    }`}
                  />
                ))}
              </div>

            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
