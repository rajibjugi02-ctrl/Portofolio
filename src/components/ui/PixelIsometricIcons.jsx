import React from 'react';

/**
 * 3D Isometric Pixel Workstation / Desk
 * Crafted with crisp pixel lines (shape-rendering="crispEdges")
 */
export function IsometricDesk({ className = "w-full max-w-[420px] h-auto" }) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      {/* Floor / Isometric Platform Shadow */}
      <polygon points="160,250 290,175 160,100 30,175" fill="#E2DDD4" />
      <polygon points="160,254 294,177 160,104 26,177" stroke="#1C1B19" strokeWidth="3" fill="none" />

      {/* Grid Floor Pattern */}
      <line x1="95" y1="137" x2="225" y2="212" stroke="#D3CDC0" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="62" y1="156" x2="192" y2="231" stroke="#D3CDC0" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="225" y1="137" x2="95" y2="212" stroke="#D3CDC0" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="258" y1="156" x2="128" y2="231" stroke="#D3CDC0" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Desk Shadow */}
      <polygon points="160,215 245,166 160,117 75,166" fill="#D3CDC0" />

      {/* Desk Legs */}
      {/* Front-left leg */}
      <rect x="90" y="166" width="6" height="42" fill="#5E5C56" stroke="#1C1B19" strokeWidth="2" />
      {/* Back-left leg */}
      <rect x="156" y="130" width="5" height="36" fill="#88847A" stroke="#1C1B19" strokeWidth="2" />
      {/* Back-right leg */}
      <rect x="220" y="152" width="5" height="38" fill="#88847A" stroke="#1C1B19" strokeWidth="2" />
      {/* Front-right leg */}
      <rect x="157" y="190" width="6" height="42" fill="#5E5C56" stroke="#1C1B19" strokeWidth="2" />

      {/* Desk Tabletop (Isometric Slab) */}
      {/* Bottom thickness */}
      <polygon points="90,166 160,206 160,214 90,174" fill="#1C1B19" stroke="#1C1B19" strokeWidth="2" />
      <polygon points="160,206 230,166 230,174 160,214" fill="#3D3A35" stroke="#1C1B19" strokeWidth="2" />
      {/* Top surface */}
      <polygon points="160,126 230,166 160,206 90,166" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="2.5" />
      <polygon points="158,132 222,168 158,200 98,168" fill="#F7F6F2" />

      {/* Laptop / Monitor Isometric */}
      {/* Laptop Base */}
      <polygon points="140,166 170,183 155,191 125,174" fill="#5E5C56" stroke="#1C1B19" strokeWidth="2" />
      <polygon points="138,168 164,182 153,188 127,174" fill="#1C1B19" />
      {/* Keyboard Grid */}
      <polygon points="140,172 158,182 150,186 132,176" fill="#3D3A35" />

      {/* Laptop Screen Vertical (Isometric facing forward-left) */}
      <polygon points="140,166 170,149 170,119 140,136" fill="#2E5BFF" stroke="#1C1B19" strokeWidth="2" />
      {/* Screen Back */}
      <polygon points="140,136 170,119 173,121 143,138" fill="#1C1B19" />
      {/* Code syntax lines on screen */}
      <rect x="145" y="142" width="16" height="3" fill="#FFFFFF" />
      <rect x="145" y="148" width="10" height="2.5" fill="#EDF5F0" />
      <rect x="145" y="153" width="18" height="2.5" fill="#FDF1ED" />
      <rect x="145" y="158" width="12" height="2.5" fill="#FFFFFF" />
      {/* Terminal prompt cursor */}
      <rect x="160" y="158" width="3" height="3" fill="#D95D39" />

      {/* Coffee Mug */}
      <rect x="180" y="156" width="9" height="11" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="1.5" />
      <rect x="189" y="159" width="3" height="5" fill="none" stroke="#1C1B19" strokeWidth="1.5" />
      <rect x="182" y="154" width="5" height="2" fill="#88847A" />
      {/* Steam pixel */}
      <rect x="183" y="148" width="2" height="3" fill="#B0ACA2" />
      <rect x="185" y="143" width="2" height="3" fill="#D3CDC0" />

      {/* Plant Pot with Pixel Leaves */}
      <polygon points="106,150 114,145 122,150 114,155" fill="#D95D39" stroke="#1C1B19" strokeWidth="1.5" />
      <rect x="109" y="150" width="10" height="9" fill="#BF4E2D" stroke="#1C1B19" strokeWidth="1.5" />
      {/* Pixel Leaf 1 */}
      <rect x="111" y="140" width="4" height="6" fill="#3D7A5A" stroke="#1C1B19" strokeWidth="1" />
      {/* Pixel Leaf 2 */}
      <rect x="115" y="137" width="5" height="5" fill="#4C9A73" stroke="#1C1B19" strokeWidth="1" />
      {/* Pixel Leaf 3 */}
      <rect x="107" y="143" width="4" height="4" fill="#316348" />

      {/* Floating Pixel Icon 1: 3D Code Cube */}
      <g className="animate-iso-float">
        <polygon points="65,90 85,78 105,90 85,102" fill="#2E5BFF" stroke="#1C1B19" strokeWidth="2" />
        <polygon points="65,90 85,102 85,124 65,112" fill="#1B47EB" stroke="#1C1B19" strokeWidth="2" />
        <polygon points="85,102 105,90 105,112 85,124" fill="#1436B8" stroke="#1C1B19" strokeWidth="2" />
        {/* Pixel code glyph </> */}
        <text x="80" y="115" fill="#FFFFFF" fontFamily="monospace" fontSize="9" fontWeight="bold">&lt;&gt;</text>
      </g>

      {/* Floating Pixel Icon 2: Design Color Swatch / Pixel Gem */}
      <g className="animate-iso-float-slow">
        <polygon points="230,80 248,70 266,80 248,90" fill="#D95D39" stroke="#1C1B19" strokeWidth="2" />
        <polygon points="230,80 248,90 248,108 230,98" fill="#BF4E2D" stroke="#1C1B19" strokeWidth="2" />
        <polygon points="248,90 266,80 266,98 248,108" fill="#993B1F" stroke="#1C1B19" strokeWidth="2" />
        {/* Diamond center */}
        <rect x="245" y="81" width="6" height="6" fill="#FDF1ED" transform="rotate(45 248 84)" />
      </g>

      {/* Little pixel shadow under floating cubes */}
      <polygon points="85,150 97,143 85,136 73,143" fill="#C5BFB2" />
      <polygon points="248,138 258,132 248,126 238,132" fill="#C5BFB2" />
    </svg>
  );
}

/**
 * 3D Isometric Pixel Cube
 */
export function IsometricCube({ color = '#2E5BFF', size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      {/* Top face */}
      <polygon points="16,2 30,10 16,18 2,10" fill={color} stroke="#1C1B19" strokeWidth="2" />
      {/* Left face */}
      <polygon points="2,10 16,18 16,30 2,22" fill="#1C1B19" fillOpacity="0.3" stroke="#1C1B19" strokeWidth="2" />
      {/* Right face */}
      <polygon points="16,18 30,10 30,22 16,30" fill="#1C1B19" fillOpacity="0.6" stroke="#1C1B19" strokeWidth="2" />
    </svg>
  );
}

/**
 * 3D Isometric Folder
 */
export function IsometricFolder({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      {/* Back flap */}
      <polygon points="6,6 14,6 18,10 26,10 26,20 6,20" fill="#D3CDC0" stroke="#1C1B19" strokeWidth="2" />
      {/* Paper contents */}
      <polygon points="8,10 24,10 24,22 8,22" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="1.5" />
      <line x1="11" y1="14" x2="21" y2="14" stroke="#5E5C56" strokeWidth="1.5" />
      <line x1="11" y1="18" x2="18" y2="18" stroke="#5E5C56" strokeWidth="1.5" />
      {/* Front flap isometric */}
      <polygon points="4,14 24,14 28,26 8,26" fill="#2E5BFF" stroke="#1C1B19" strokeWidth="2" />
    </svg>
  );
}

/**
 * 3D Isometric Terminal Window
 */
export function IsometricTerminal({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      {/* Terminal Base Window */}
      <polygon points="16,4 30,11 16,18 2,11" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="2" />
      <polygon points="2,11 16,18 16,28 2,21" fill="#1C1B19" stroke="#1C1B19" strokeWidth="2" />
      <polygon points="16,18 30,11 30,21 16,28" fill="#3D3A35" stroke="#1C1B19" strokeWidth="2" />
      {/* Code prompt symbol on face */}
      <line x1="5" y1="16" x2="9" y2="18" stroke="#2E5BFF" strokeWidth="2" />
      <line x1="5" y1="20" x2="9" y2="18" stroke="#2E5BFF" strokeWidth="2" />
      <rect x="11" y="20" width="3" height="2" fill="#2E5BFF" />
    </svg>
  );
}

/**
 * 3D Isometric Browser Window Frame
 */
export function IsometricWindow({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      <rect x="3" y="4" width="26" height="24" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="2" />
      {/* Window Title Bar */}
      <rect x="3" y="4" width="26" height="7" fill="#EFECE6" stroke="#1C1B19" strokeWidth="2" />
      {/* 3 Pixel Window Dots */}
      <rect x="6" y="6.5" width="2" height="2" fill="#D95D39" />
      <rect x="10" y="6.5" width="2" height="2" fill="#E2B734" />
      <rect x="14" y="6.5" width="2" height="2" fill="#3D7A5A" />
      {/* Content box */}
      <rect x="7" y="15" width="18" height="9" fill="#F7F6F2" stroke="#1C1B19" strokeWidth="1" />
      <rect x="10" y="18" width="6" height="3" fill="#2E5BFF" />
    </svg>
  );
}

/**
 * 3D Isometric Floppy Disk / Save
 */
export function IsometricFloppy({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pixel-crisp ${className}`}
      shapeRendering="crispEdges"
    >
      <rect x="4" y="4" width="24" height="24" fill="#1C1B19" stroke="#1C1B19" strokeWidth="2" />
      {/* Metal shutter */}
      <rect x="9" y="4" width="14" height="10" fill="#EFECE6" stroke="#1C1B19" strokeWidth="1.5" />
      <rect x="12" y="7" width="3" height="5" fill="#1C1B19" />
      {/* Label area */}
      <rect x="8" y="17" width="16" height="9" fill="#FFFFFF" stroke="#1C1B19" strokeWidth="1.5" />
      <line x1="11" y1="20" x2="21" y2="20" stroke="#2E5BFF" strokeWidth="1.5" />
      <line x1="11" y1="23" x2="18" y2="23" stroke="#5E5C56" strokeWidth="1.5" />
    </svg>
  );
}
