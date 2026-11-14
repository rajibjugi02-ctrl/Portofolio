/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F9F9F9',
        borderSubtle: '#EAEAEA',
        textPrimary: '#1A1A1A',
        textSecondary: '#666666',
        slateBlue: {
          DEFAULT: '#4A6B82',
          hover: '#3D586C',
          light: '#EBF1F5',
        },
        sageGreen: {
          DEFAULT: '#5C7A67',
          hover: '#4C6655',
          light: '#EFF4F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 16px 32px -6px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
