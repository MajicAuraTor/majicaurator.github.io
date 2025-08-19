/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightpurple: '#e6e6fa', // Lavender
      },
      backgroundColor: {
        'primary': '#e6e6fa', // Use for main backgrounds
      },
    },
  },
  plugins: [],
};
