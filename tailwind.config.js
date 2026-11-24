/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        surface: '#FFFFFF',
        stone: {
          DEFAULT: '#EFECE6',
          light: '#F4F2ED',
          dark: '#E2DDD4',
        },
        charcoal: {
          DEFAULT: '#1C1B19',
          light: '#2D2B27',
          border: '#1C1B19',
        },
        mutedSlate: '#5E5C56',
        cobalt: {
          DEFAULT: '#2E5BFF',
          hover: '#1B47EB',
          light: '#EBF0FF',
        },
        sage: {
          DEFAULT: '#3D7A5A',
          hover: '#316348',
          light: '#EDF5F0',
        },
        terracotta: {
          DEFAULT: '#D95D39',
          hover: '#BF4E2D',
          light: '#FDF1ED',
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', '"Silkscreen"', 'monospace'],
        silkscreen: ['"Silkscreen"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px #1C1B19',
        'pixel-sm': '2px 2px 0px 0px #1C1B19',
        'pixel-lg': '6px 6px 0px 0px #1C1B19',
        'pixel-xl': '8px 8px 0px 0px #1C1B19',
        'pixel-cobalt': '4px 4px 0px 0px #2E5BFF',
        'pixel-white': '4px 4px 0px 0px #FFFFFF',
      },
      borderRadius: {
        'none': '0px',
      },
    },
  },
  plugins: [],
}
