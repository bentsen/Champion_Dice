module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color' : 'rgb(186,186,186)',
        'button-color' : 'rgb(33,33,33)',
        'orange-color' : 'rgb(253,108,64)',
        'navbar-color' : '#262321',
        'footer-color' : '#111111',
        'custom-text' : '#fbb033',
        'button-color2' : '#353535',
        'button-hover' : '#0088e4',
        'button-hover2' : '#4f4f4f',
        'selection-color' : '#353535',
        'login-color' : 'rgba(26,23,22,.4)',
        'borderLogin-color' : 'rgba(0,0,0,.15)'
      }
    },
  },
  plugins: [],
}