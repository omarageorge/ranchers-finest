import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#ED1B24',
        gray: '#D1D5DB',
        raven: '#171717',
        black: '#0D0D0D',
        white: '#F9FAFB',
        yellow: '#FFDD00',
        whitish: 'rgba(255, 255, 255, 0.7)',
        reddish: 'rgba(237, 27, 36, 0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
