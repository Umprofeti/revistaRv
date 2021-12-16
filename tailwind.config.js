module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ['Lato', 'sans-serif'],
      'Playfair': ['Playfair Display', 'serif'],
      'Karla': ['Karla', 'serif']
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '7': '7px'
    },
    extend: {
      fontSize: {
        '5.5xl':['3.3rem', {
          lineHeight: '1'
        }],
        '4.4xl':['2.4rem',{
          lineHeight: '1.5rem'
        }] 
      },
      colors: {
        'basicoRv': '#CC9B34',
        'doradoRV': '#cb9d23',
      },
      top: {
        '19/20': '99%',
      },
      backgroundImage: {
        'fondoPag1': "url(./img/background_logo.jpg)",
        'fondoPag2' : "url(./img/portadafoto.svg)"
      },
      rotate: {
        '270': '270deg'
      },
      height: {
        'screen-80':'80vw'
      },
      width: {
        'screen-50': '50vw'
      }
    },
  },
  plugins: [
    require ('./node_modules/postcss-import'),
    require('./node_modules/tailwindcss'),
    require('./node_modules/autoprefixer'),
  ],
}
