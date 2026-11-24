import React from 'react';

/**
 * PixelCard - Solid Minimalist Pixel Card
 * Crisp 2px charcoal border and hard shadow.
 */
export default function PixelCard({
  children,
  variant = 'white', // 'white' | 'stone' | 'cobalt' | 'dark'
  interactive = false,
  shadowSize = 'normal', // 'sm' | 'normal' | 'lg'
  className = '',
  ...props
}) {
  const baseStyles = 'border-2 border-[#1C1B19] rounded-none';

  const shadowStyles = {
    sm: 'shadow-[2px_2px_0px_0px_#1C1B19]',
    normal: 'shadow-[4px_4px_0px_0px_#1C1B19]',
    lg: 'shadow-[6px_6px_0px_0px_#1C1B19]',
  };

  const interactiveStyles = interactive
    ? 'transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1C1B19]'
    : '';

  const variantStyles = {
    white: 'bg-[#FFFFFF] text-[#1C1B19]',
    stone: 'bg-[#EFECE6] text-[#1C1B19]',
    paper: 'bg-[#F7F6F2] text-[#1C1B19]',
    cobalt: 'bg-[#2E5BFF] text-white',
    dark: 'bg-[#1C1B19] text-white',
  };

  return (
    <div
      className={`${baseStyles} ${shadowStyles[shadowSize]} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
