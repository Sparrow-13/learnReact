/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {

        '2xl': [
            '0 0 100px rgba(255, 251, 0,1)',
            // '0 45px 65px rgba(255, 251, 0, 0.15)'
        ]
      },
      width: {
        'half': '10vw',
      }
    },
  },
  plugins: [],
}