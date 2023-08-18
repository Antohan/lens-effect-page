import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-kamerik205)'],
        body: ['var(--font-merriweather)'],
        sans: ['Arial'],
      },
      inset: {
        '5vw': '5vw',
        '10%': '10%',
      },
      translate: {
        '-55px': '-55px',
        '88px': '88px',
        '180px': '180px',
        '190px': '190px',
        '300px': '300px',
        '380px': '380px',
      },
      scale: {
        '106': '1.06',
        '88': '.88',
        '80': '.8',
        '90': '.9',
      }
    },
  },
  plugins: [require('tailwindcss-3d')],
};
export default config;
