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
        'soft': '0 4px 20px -2px rgba(27, 59, 54, 0.06)',
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'elevation': '0 12px 30px -8px rgba(27, 59, 54, 0.12)',
        'glow-lime': '0 0 24px -4px rgba(123, 241, 121, 0.4)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
