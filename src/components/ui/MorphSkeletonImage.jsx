import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * MorphSkeletonImage
 * Komponen gambar dengan animasi Bar Morph skeleton loading:
 * Bilah placeholder melakukan morphing lebar dan denyut halus selama gambar dimuat,
 * lalu bertransisi mulus ke gambar asli setelah siap.
 */
export default function MorphSkeletonImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  fallbackTitle = '',
  fallbackCategory = '',
  fallbackDomain = ''
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EAE7DF] ${className}`}>
      {/* 1. Bar Morph Skeleton Loading Indicator */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-[#F2EFE9] select-none"
          >
            {/* Top Bar Morphing */}
            <div className="flex items-center justify-between gap-2">
              <motion.div
                animate={{
                  width: ['40%', '75%', '50%', '80%'],
                  opacity: [0.6, 1, 0.7, 0.9]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="h-3 bg-[#D8D4CA] border border-[#1C1B19]/20"
              />
              <span className="w-2.5 h-2.5 bg-[#2E5BFF] border border-[#1C1B19] animate-pulse" />
            </div>

            {/* Center Morphing Wave */}
            <div className="space-y-2.5 my-auto">
              <motion.div
                animate={{
                  width: ['30%', '90%', '60%', '85%'],
                  scaleY: [1, 1.15, 0.95, 1]
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="h-4 bg-[#CDC8BD] border border-[#1C1B19]/20"
              />
              <motion.div
                animate={{
                  width: ['70%', '40%', '85%', '55%'],
                  scaleY: [1, 0.9, 1.1, 1]
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2
                }}
                className="h-2.5 bg-[#DDD9D0] border border-[#1C1B19]/15"
              />
            </div>

            {/* Bottom Status Tag */}
            <div className="flex items-center justify-between pt-2 border-t border-[#1C1B19]/15">
              <span className="font-mono text-[9px] font-bold text-[#5E5C56] uppercase tracking-wider">
                MEMUAT PRATINJAU...
              </span>
              <motion.div
                animate={{
                  width: ['24px', '48px', '32px'],
                  opacity: [0.5, 0.9, 0.6]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="h-2 bg-[#2E5BFF]/30 border border-[#2E5BFF]/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Fallback UI when Image Fails to Load */}
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#1C1B19] text-white p-5 text-center select-none">
          {fallbackCategory && (
            <span className="font-mono text-xs uppercase tracking-wider text-[#2E5BFF] mb-1 font-bold">
              {fallbackCategory}
            </span>
          )}
          {fallbackTitle && (
            <h4 className="font-pixel text-lg sm:text-xl tracking-tight mb-1 uppercase">
              {fallbackTitle}
            </h4>
          )}
          {fallbackDomain && (
            <span className="font-mono text-xs text-neutral-300 bg-white/10 px-2 py-0.5 border border-white/20 mt-1">
              {fallbackDomain}
            </span>
          )}
        </div>
      ) : (
        /* 3. Actual Image with Smooth Fade-In Transition */
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full h-full object-cover object-top select-none ${imgClassName}`}
        />
      )}
    </div>
  );
}
