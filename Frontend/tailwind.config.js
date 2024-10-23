/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#19252BFF',
        'secondary': '#19252BFF',
        'light': '#F6F6F6',
        'accent': '#FFCB74',
        'navy-800': '#0a1128',
        'navy-900': '#001f3f'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
