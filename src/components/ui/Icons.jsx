import React from 'react';

/**
 * High-quality Canva SVG Icon
 */
export function CanvaIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5c-.9 1.1-2.1 1.7-3.4 1.7-2.6 0-4.4-2.1-4.4-5.2 0-3.4 2.2-5.6 5-5.6 1.1 0 2 .4 2.6 1.1.5.6.7 1.3.6 2-.1 1.2-1 2-2.3 2-1 0-1.7-.5-1.9-1.2l-.05.02c-.07.4-.11.8-.11 1.2 0 2.1 1 3.4 2.5 3.4.8 0 1.5-.4 2-.9l.76.68zm-1.6-4.9c.6 0 1-.3 1-.8 0-.4-.1-.7-.4-1-.3-.4-.9-.6-1.5-.6-1.3 0-2.1 1.2-2.3 2.8.3.3.7.5 1.3.5.7 0 1.4-.4 1.9-.9z" />
    </svg>
  );
}

/**
 * CapCut / Video Editor SVG Icon
 */
export function CapCutIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Stylized CapCut double trapezoid film cutter */}
      <path d="M3.5 4h7.2l-2.4 7H3.5V4zm9.8 0H20.5v7h-4.8l-2.4-7zM3.5 13h4.8l2.4 7H3.5v-7zm14.6 7l-2.4-7H20.5v7h-2.4z" />
    </svg>
  );
}

// Aliases for convenience
export const SiCanva = CanvaIcon;
export const SiCapcut = CapCutIcon;
