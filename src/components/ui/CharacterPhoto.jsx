import { useState, useRef } from 'react';
import { SiReact } from 'react-icons/si';
import { CanvaIcon } from './Icons';
import heroImg from '../../assets/hero.png';

/**
 * CharacterPhoto Component
 * Features:
 * 1. Offset Architectural Frame that snaps into alignment on hover.
 * 2. Subtle 3D Perspective Tilt on mouse move (max 5 degrees).
 * 3. Two calm floating glassmorphism badges (React & Canva).
 * 4. Filter transition from warm-muted to crisp full color.
 */
export default function CharacterPhoto({ 
  className = '', 
  size = 'large', 
  showBadges = true,
  alt = 'Muhammad Rajib Zahir'
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt: max 5 degrees
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Dimensions based on size prop
  const containerDimensions = size === 'large'
    ? 'w-[280px] h-[370px] sm:w-[340px] sm:h-[440px] lg:w-[390px] lg:h-[500px]'
    : 'w-[240px] h-[310px] sm:w-[270px] sm:h-[350px]';

  return (
    <div className={`relative group select-none ${className}`}>
      {/* 1. Offset Architectural Frame Behind Photo */}
      <div 
        className="absolute inset-0 rounded-[2rem] border-2 border-[#4A6B82]/30 translate-x-3.5 translate-y-3.5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#4A6B82]/60 transition-all duration-500 ease-out -z-10 pointer-events-none" 
      />

      {/* 2. Main 3D Tilt Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 100ms ease-out' : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`relative ${containerDimensions} rounded-[1.75rem] bg-gradient-to-b from-[#F7F4F0] via-[#EFEAE2] to-[#E5DFD5] border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex items-end justify-center`}
      >
        {/* Subtle interior lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4A6B82]/10 via-transparent to-white/40 pointer-events-none z-10" />

        {/* Transparent Character Photo */}
        <img
          src={heroImg}
          alt={alt}
          draggable={false}
          className="relative z-0 w-full h-full object-cover object-top transition-all duration-500 ease-out filter saturate-[0.94] contrast-[1.02] group-hover:saturate-105 group-hover:scale-[1.02]"
        />

        {/* 3. Floating Glass Badges */}
        {showBadges && (
          <>
            {/* Top-Right Badge: Canva / Creative Design */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none animate-float">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-xs font-semibold text-[#1A1A1A]">
                <CanvaIcon size={14} className="text-[#00C4CC] flex-shrink-0" />
                <span className="whitespace-nowrap tracking-tight">Creative & Canva</span>
              </div>
            </div>

            {/* Bottom-Left Badge: React / Web Dev */}
            <div className="absolute bottom-5 left-4 z-20 pointer-events-none animate-float-slow">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-xs font-semibold text-[#1A1A1A]">
                <SiReact size={15} className="text-[#61DAFB] flex-shrink-0" />
                <span className="whitespace-nowrap tracking-tight">Front-End React</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
