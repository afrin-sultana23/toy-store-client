/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors : {
    //   gray: {
    //     darkest: '#1f2d3d',
    //     dark: '#3c4858',
    //     DEFAULT: '#c0ccda',
    //     light: '#e0e6ed',
    //     lightest: '#f9fafc',
    //   }
    // },
    extend: {
    },
  },
  plugins: [require('daisyui')],
}

