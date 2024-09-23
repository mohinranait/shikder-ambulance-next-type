import {nextui} from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|modal|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1024px',

      },
      container:{
        center:true,
        padding: '1rem', 
       
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light:{
        colors:{
          primary: '#4a00ff',
          secondary: '#ff00d3',
          accent : '#00d7c0',
          black : '#2b3440',
          white: '#fff',
          gray: '#808080',
          theme: '#ffffff',
        }
      },
      dark:{
        colors:{
          primary : '#ff52d9',
          secondary: '#7480ff',
          accent : '#D1D8C5',
          black : '#141a16',
          white: '#fff',
          gray: '#808080',
          theme: '#1d232a',
        }
      },
      blue:{
        colors:{
          primary : '#615EFC',
          secondary: '#7E8EF1',
          accent : '#D1D8C5',
          black : '#141a16',
          white: '#fff',
          gray: '#808080',
          theme: '#0a0c85',
        }
      },
      orange:{
        colors:{
          primary : '#ff0000',
          secondary: '#eec861',
          accent : '#D1D8C5',
          black : '#141a16',
          white: '#fff',
          gray: '#808080',
          theme: '#f5f5f5',
        }
      },
    }
  })],
}

