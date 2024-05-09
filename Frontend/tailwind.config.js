/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      nightTheme: {
        text: '#F8F9FA',
        background: '#212529',
        primary: '#5FAD56',
        secondary: '#9395D3',
        accent: '#6C757D'
      },
      dayTheme: {
        text: '#252422',
        background: '#84a49c',
        primary: '#f7ede3',
        secondary: '#f6bc60',
        accent: '#F5CAC3'
      }
      
    },
    fontFamily: {
      sans: ['Inter', 'Roboto'],
    },
    fontSize: {
      h1: "5.61rem",
      h2: "4.209rem",
      h3: "3.157rem",
      h4: "2.369rem",
      h5: "1.777rem",
      h6: "1.333rem",
      p: "1rem",
      small: "0.75rem"
    },
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.50rem",
        15: "3.75rem",
        16: "4rem"

      }
    }

  },
  plugins: [],
}

