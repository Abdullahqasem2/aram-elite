/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        'gold-bg': '#FBF6EC',
        black: '#0D0D0D',
        dark: '#1A1A1A',
        primary: '#1B3A6B',
        'primary-dark': '#122849',
        'primary-light': '#2450A0',
        accent: '#E8432A',
        green: '#1A8C4E',
        bg: '#F5F6F8',
        bg2: '#FFFFFF',
        text: '#1A1A1A',
        text2: '#444',
        text3: '#777',
        border: '#E0E4EC',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        cond: ['Barlow Condensed', 'sans-serif'],
        arabic: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
