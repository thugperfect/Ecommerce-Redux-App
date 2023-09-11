/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      theme:{
        'sm':'400px',
        'md':'600px',
        'lg':'800px',
        'xl':'1000px',
        '2xl':'1200px'
      }
    },
  },
  plugins: [],
}

