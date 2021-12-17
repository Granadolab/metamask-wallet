module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {},
  },
  plugins: [],
  // purge: [
  //   'src/**/*.js',
  //   'src/**/*.jsx',
  //   'src/**/*.ts',
  //   'src/**/*.tsx',
  //   'public/**/*.html',
  // ],
}
