import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth:{
      container:'1440px',
      contentContainer:'1140px',
      containerSmall:'1040px',
      containerXs:'768px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        bodyFont:['Montserrat', 'sans-serif'],
        titleFont:['Inter', 'sans-serif'],
      },
      boxShadow:{
        navShadow:"0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors:{
        bodyColor:'#0A192F',
        textGreen:'#64ffda',
        textLight:'#ccd6f6',
        textDark:'#8892b0',
        hoverColor:'rgba(100,255,218,0.1)',
      }
    },
  },
  plugins: [],
}
export default config

/*
font-family: 'Inter', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Source Sans 3', sans-serif;
*/