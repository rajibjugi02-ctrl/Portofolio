import { useState } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiArrowsExpand 
} from 'react-icons/hi';
import DesignLightboxModal from './DesignLightboxModal';

/**
 * 3D Depth Carousel (Coverflow Style) for mobile viewports
 * - 3D Perspective & Depth: Active card in center (scale-100, opacity-100, z-20)
 *   Flanking cards peeking on sides (scale-[0.85], opacity-45, blur-[0.5px], z-10)
 * - Touch swipe gestures (onTouchStart, onTouchMove, onTouchEnd)
 * - Circular Prev/Next buttons & slide counter indicator (01 / 07)
 * - Smooth cubic-bezier transition (duration-500 ease-[cubic-bezier(0.22,1,0.36,1)])
 * - Tap to open Fullscreen Lightbox in native aspect ratio without crop
 */
export default function DepthCarousel({ items = [], onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [internalLightboxIndex, setInternalLightboxIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const total = items.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Touch swipe handling
  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleOpenDetail = (idx) => {
    if (onOpenLightbox) {
      onOpenLightbox(idx);
    } else {
      setInternalLightboxIndex(idx);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full relative select-none">
      {/* 3D Depth Stage */}
      <div
        className="relative w-full h-[490px] flex items-center justify-center overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, idx) => {
          // Calculate modular offset for circular depth loop
          let diff = idx - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isActive = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;

          let transformStyle = '';
          let opacity = 0;
          let zIndex = 5;
          let filter = 'blur(1px)';
          let pointerEvents = 'none';

          if (isActive) {
            transformStyle = 'translateX(0%) scale(1)';
            opacity = 1;
            zIndex = 20;
            filter = 'none';
            pointerEvents = 'auto';
          } else if (isLeft) {
            transformStyle = 'translateX(-56%) scale(0.85)';
            opacity = 0.45;
            zIndex = 10;
            filter = 'blur(0.5px)';
            pointerEvents = 'auto';
          } else if (isRight) {
            transformStyle = 'translateX(56%) scale(0.85)';
            opacity = 0.45;
            zIndex = 10;
            filter = 'blur(0.5px)';
            pointerEvents = 'auto';
          } else {
            transformStyle = `translateX(${diff > 0 ? 110 : -110}%) scale(0.7)`;
            opacity = 0;
            zIndex = 5;
            filter = 'blur(2px)';
            pointerEvents = 'none';
          }

          return (
            <div
              key={item.id || idx}
              onClick={() => {
                if (isActive) {
                  handleOpenDetail(idx);
                } else if (isLeft || isRight) {
                  setActiveIndex(idx);
                }
              }}
              style={{
                transform: transformStyle,
                opacity,
                zIndex,
                filter,
                pointerEvents,
              }}
              className="absolute w-[275px] h-[450px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-black/10 group">
                {/* Artwork Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${item.id}/1080/1920`;
                  }}
                />

                {/* Subtle Expand Pill on Active Card */}
                {isActive && (
                  <div className="absolute top-3.5 right-3.5 z-30">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetail(idx);
                      }}
                      className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-md active:scale-95 transition-transform"
                      aria-label="Lihat Ukuran Penuh"
                    >
                      <HiArrowsExpand className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Info Overlay at Bottom of Active Card */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-left z-20">
                    <span className="inline-block px-2.5 py-0.5 mb-1.5 rounded-full text-[10px] font-medium tracking-wider uppercase bg-white/15 text-neutral-200 border border-white/20 backdrop-blur-md">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1 font-normal">
                      <span>Ketuk kartu untuk detail penuh</span>
                    </p>
                  </div>
                )}

                {/* Flanking Card Dim Overlay */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/25 rounded-2xl" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: Prev/Next & Slide Counter */}
      <div className="flex items-center justify-between px-4 mt-2 select-none">
        {/* Prev Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-white border border-[#EAEAEA] shadow-soft-sm text-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
          aria-label="Desain Sebelumnya"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter & Dots */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="text-xs font-semibold text-[#888888] bg-white px-3.5 py-1 rounded-full border border-[#EAEAEA] shadow-soft-sm">
            <span className="text-[#1A1A1A] font-bold">0{activeIndex + 1}</span> / 0{total}
          </div>
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-4 h-1.5 bg-[#1A1A1A]'
                    : 'w-1.5 h-1.5 bg-neutral-300'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-white border border-[#EAEAEA] shadow-soft-sm text-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
          aria-label="Desain Berikutnya"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Fallback Internal Modal if onOpenLightbox is not provided */}
      {!onOpenLightbox && (
        <DesignLightboxModal
          isOpen={internalLightboxIndex !== null}
          initialIndex={internalLightboxIndex ?? 0}
          items={items}
          onClose={() => setInternalLightboxIndex(null)}
        />
      )}
    </div>
  );
}
