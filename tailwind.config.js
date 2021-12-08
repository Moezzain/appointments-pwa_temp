module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: '.4rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      screens: {
        sm: '350px',
        md: '500px',
        lg: '700px',
        xl: '1080px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['SFPro', 'sans-serif'],
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      tableLayout: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
