/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Raleway': ['Raleway'],
      'Arial' : ['Arial'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      backgroundSize : {
        'adjust' : '100% 100%'
      },
      minWidth : {
        mediumWidth : '100px',
      },
      dropShadow : {
        darkShadow : '-70px 3px 60px #000000A1',
        lightShadow : '-38.17px 49px 40px #0203002E'
      },
      colors: {
         lightBlue : {
          '100' : '#afc1da',
          '200' : '#bdcfe8',
         },
         dark : {
          '100' : '#1a2123',
          '200' : '#262A2D',
          '300' : '#192123',
         },
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.jpg')",
        'presentation': "url('../src/img/presentation.jpg')",
        'about': "url('../src/img/about.jpg')",
        'footer': "url('../src/img/footer.jpg')",
        'presentation-2': "url('../src/img/presentation-2.jpg')",
        'about2': "url('../src/img/about-2.jpg')",
        'conference': "url('../src/img/conference.jpg')",
        'presentationcon': "url('../src/img/presentation-con.jpg')",
        'linearGradient' : 'linear-gradient(180deg, #364E6EB5 0%, #1E2E45 100%);',
        'linearGradient2' : 'linear-gradient(180deg, #545E68 0%, #424C53 38%, #1C2427 100%);'
      },
    },
  },
  plugins: [],
}

