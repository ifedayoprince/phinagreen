/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'base': ['16px', '22px'],
        'sm': ['18px', '24px'],
        'md': ['22px', '28px'],
        'lg': ['20px', '26px'],
        'xl': ['22px', '24px'],
        '2xl': ['24px', '26px'],
        '3xl': ['28px', '32px'],
        '4xl': ['32px', '36px']
      },
      colors: {
        primary: "#4CAF50",
        secondary: "#E3F3FB",
        subtext: "#868686",
        input: "#F5F5F5",
        text: "#424242"
      }
    },
  },
  rippleui: {
    removeThemes: ["dark"],
    themes: [ 
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#4CAF50",
          secondary: "#E3F3FB",
          backgroundSecondary: "#000000",
          backgroundPrimary: "#ffffff"
        },
      },
    ],
  },
  plugins: [require('rippleui')],
}

