/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      padding: {
        'field': '0 20px',
      },
      backgroundImage: {
        'avatar': "url('https://jar-img.monobank.com.ua/N92.30.0021591888.jpg?ts=2023-07-20T14:33:15.758636825')"
      },
      fontSize: {
        'th': ['14px', {
          lineHeight: '17px',
          fontWeight: '400',
        }],
        't': ['16px', {
          lineHeight: '24px',
          fontWeight: '500',
        }],
        'desc': ['14px', {
          lineHeight: '16px',
          fontWeight: '500',
        }]

      }
    },
  },
  plugins: [],
}

