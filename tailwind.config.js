/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        darkPrimary: '#2A254B',
        primary: '#4E4D93',
        greyLight: '#F9F9F9',
        greyBorder: '#EBE8F4',
        darkBorder: '#CAC6DA',
        transparentWhite: '#F9F9F922',
      },
    },
  },
  plugins: [],
};
