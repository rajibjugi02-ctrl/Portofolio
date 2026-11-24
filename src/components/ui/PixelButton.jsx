import React from 'react';

/**
 * PixelButton - Tactile Retro-Modern Physical Button
 * Features sharp corners (rounded-none), solid pixel border, and physical press micro-interaction.
 */
export default function PixelButton({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'outline' | 'cobalt'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-pixel tracking-wide select-none transition-all duration-100 uppercase border-2 border-[#1C1B19] rounded-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs shadow-[2px_2px_0px_0px_#1C1B19] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none',
    md: 'px-5 py-2.5 text-sm shadow-[4px_4px_0px_0px_#1C1B19] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1C1B19] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#1C1B19]',
    lg: 'px-7 py-3.5 text-base shadow-[4px_4px_0px_0px_#1C1B19] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1C1B19] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#1C1B19]',
  };

  const variantStyles = {
    primary: 'bg-[#2E5BFF] text-white hover:bg-[#1B47EB]',
    secondary: 'bg-[#FFFFFF] text-[#1C1B19] hover:bg-[#EFECE6]',
    dark: 'bg-[#1C1B19] text-white hover:bg-[#2D2B27]',
    outline: 'bg-transparent text-[#1C1B19] hover:bg-[#EFECE6]',
    stone: 'bg-[#EFECE6] text-[#1C1B19] hover:bg-[#E2DDD4]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
