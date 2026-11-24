import { useState } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiArrowsExpand 
} from 'react-icons/hi';
import DesignLightboxModal from './DesignLightboxModal';

/**
 * 3D Depth Carousel for mobile viewports - Modern Pixel Styling
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
          let diff = idx - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          const isActive = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;

          let transformStyle = '';
          let opacity = 0;
          let zIndex = 5;
          let filter = 'none';
          let pointerEvents = 'none';

          if (isActive) {
            transformStyle = 'translateX(0%) scale(1)';
            opacity = 1;
            zIndex = 20;
            pointerEvents = 'auto';
          } else if (isLeft) {
            transformStyle = 'translateX(-56%) scale(0.85)';
            opacity = 0.55;
            zIndex = 10;
            pointerEvents = 'auto';
          } else if (isRight) {
            transformStyle = 'translateX(56%) scale(0.85)';
            opacity = 0.55;
            zIndex = 10;
            pointerEvents = 'auto';
          } else {
            transformStyle = `translateX(${diff > 0 ? 110 : -110}%) scale(0.7)`;
            opacity = 0;
            zIndex = 5;
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
              className="absolute w-[280px] h-[450px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
            >
              <div className="w-full h-full relative rounded-none overflow-hidden bg-white border-2 border-[#1C1B19] shadow-[4px_4px_0px_0px_#1C1B19] group">
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

                {/* Pixel Expand Button */}
                {isActive && (
                  <div className="absolute top-3 right-3 z-30">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetail(idx);
                      }}
                      className="p-1.5 bg-white text-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center active:translate-x-[1px] active:translate-y-[1px] transition-all"
                      aria-label="Lihat Ukuran Penuh"
                    >
                      <HiArrowsExpand className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Pixel Info Overlay */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 p-4 pt-10 bg-gradient-to-t from-[#1C1B19] via-[#1C1B19]/80 to-transparent text-left z-20">
                    <span className="inline-block px-2 py-0.5 mb-1.5 font-mono text-[10px] font-bold tracking-wider uppercase bg-[#2E5BFF] text-white border border-white">
                      {item.category}
                    </span>
                    <h3 className="font-pixel text-white font-bold text-sm leading-snug line-clamp-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[10px] text-neutral-300 mt-1">
                      Ketuk kartu untuk zoom
                    </p>
                  </div>
                )}

                {!isActive && (
                  <div className="absolute inset-0 bg-[#1C1B19]/30" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: Prev/Next & Slide Counter */}
      <div className="flex items-center justify-between px-4 mt-2 select-none">
        <button
          type="button"
          onClick={handlePrev}
          className="w-10 h-10 bg-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] text-[#1C1B19] flex items-center justify-center hover:bg-[#EFECE6] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          aria-label="Desain Sebelumnya"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        <div className="font-mono text-xs font-bold text-[#1C1B19] bg-white px-3 py-1 border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19]">
          <span>0{activeIndex + 1}</span> / 0{total}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="w-10 h-10 bg-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] text-[#1C1B19] flex items-center justify-center hover:bg-[#EFECE6] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          aria-label="Desain Berikutnya"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>

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
