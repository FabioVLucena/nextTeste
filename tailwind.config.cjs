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
        'people': "url('https://gigacorp.com.br/wp-content/uploads/2021/10/bn2.jpg')",
      },
      colors: {
        'gray-true': '#202020',
      },
    },
  },
  plugins: [],
}
