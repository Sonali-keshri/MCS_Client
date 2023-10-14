/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/blueg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}