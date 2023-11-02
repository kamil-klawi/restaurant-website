/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { max: '560px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
    },
  },
  plugins: [],
};
