/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#060d1e',
        'background': '#fbfcfe',
        'primary': '#2052b6',
        'secondary': '#cbd9f6',
        'accent': '#255ed0',
       },
       fontSize: {
        'h1': '2.986rem',
        'h2': '2.488rem',
        'h3': '2.074rem',
        'h4': '1.728rem',
        'h5': '1.44rem',
        'h6': '1.2rem',
        'p': '1rem',
        'small': '0.833rem',
       }
    },
  },
  plugins: [],
}
