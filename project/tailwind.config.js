/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add custom styles
  variants: {
    extend: {
      backgroundColor: ['hover', 'active'],
    },
  },
}
