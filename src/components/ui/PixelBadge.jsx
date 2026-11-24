import React from 'react';

/**
 * PixelBadge - Compact Pixel Metadata Tag
 */
export default function PixelBadge({
  children,
  variant = 'default', // 'default' | 'cobalt' | 'sage' | 'terracotta' | 'dark'
  size = 'md', // 'sm' | 'md'
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-mono font-medium uppercase border border-[#1C1B19] rounded-none select-none tracking-tight';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px] shadow-[1px_1px_0px_0px_#1C1B19]',
    md: 'px-2.5 py-1 text-xs shadow-[2px_2px_0px_0px_#1C1B19]',
  };

  const variantStyles = {
    default: 'bg-[#FFFFFF] text-[#1C1B19]',
    stone: 'bg-[#EFECE6] text-[#1C1B19]',
    cobalt: 'bg-[#EBF0FF] text-[#2E5BFF] border-[#2E5BFF]',
    cobaltSolid: 'bg-[#2E5BFF] text-white border-[#1C1B19]',
    sage: 'bg-[#EDF5F0] text-[#3D7A5A] border-[#3D7A5A]',
    terracotta: 'bg-[#FDF1ED] text-[#D95D39] border-[#D95D39]',
    dark: 'bg-[#1C1B19] text-white',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3 h-3 flex-shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
