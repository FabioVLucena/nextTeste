/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'principal': "url('/src/img/deep_florest.jpg')",
        'code': "url('/src/img/code_wallpaper.jpg')",
      },
    },
  },
  plugins: [],
}
