/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          950: '#0d1d1a',
          900: '#162E2A',
          850: '#1B3B36',
          800: '#204741',
          700: '#285B53',
          600: '#37776D',
          500: '#4B9B8E',
          100: '#E6F4F1',
          50: '#F0F9F7',
        },
        lime: {
          300: '#9df69c',
          400: '#7BF179',
          500: '#5ce259',
          600: '#3ec93b',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(27, 59, 54, 0.04), 0 8px 20px -4px rgba(27, 59, 54, 0.06)',
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'elevation': '0 8px 16px -4px rgba(27, 59, 54, 0.08), 0 20px 36px -8px rgba(27, 59, 54, 0.12)',
        'card-depth': '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -2px rgba(27,59,54,0.07)',
        'card-hover': '0 8px 24px -4px rgba(27,59,54,0.12), 0 16px 36px -6px rgba(27,59,54,0.10)',
        'forest-card': '0 14px 40px -10px rgba(13, 29, 26, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'glow-lime': '0 0 28px -4px rgba(123, 241, 121, 0.35)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '18px',
        '3xl': '26px',
      }
    },
  },
  plugins: [],
}
