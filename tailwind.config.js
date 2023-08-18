/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
    variants: {},
      screens: {
        'exsm':'353px',
        'gm': '541px',
        'pm':'430px',
        'nm':'895px',
        'sm': '640px',
        'six':'700px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
         
        '2xl': '1536px',
        '3xl': '1736px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        // volkhov: ['Volkhov', 'serif'],
        popping: ['Poppins', 'sans-serif'],
        sofia: ['Sofia Sans', 'sans-serif'],
        Arimo: [ 'Arimo', 'sans-serif']

        
      

      },
  
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'ButtonShadow': ' 0px 18px 40px 0px rgba(255, 110, 107, 0.30)',
        'summery': '2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05)'
      },
      colors: {
        'primary-orange': '#FF5722',
        'mostPurple': '#FF413D',
        
      }
    },
  },
  plugins: [],
}