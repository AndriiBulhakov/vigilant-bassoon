module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'body/extra-large': '1.625rem',
      'body/large': '1.125rem',
      'body/medium': '1rem',
      'body/small': '0.875rem',
      'headlines/h1': '3.125rem',
      'headlines/h2': '2.375rem',
      'headlines/h3': '1.875rem',
    },
    extend: {
      colors: {
        red: {
          primary: '#FF4800',
          secondary: '#FFCFBC',
        },
        orange: {
          primary: '#FFC046',
          secondary: '#FFE6B7',
        },
        pink: {
          primary: '#FF8DFA',
          secondary: '#FFD8FD',
        },
        blue: {
          primary: '#B0B6F2',
          secondary: '#E7E3FF',
        },
        gray: {
          primary: '#1C1D20',
          secondary: '#494A4D',
          tetriary: '#6B7280',
          quaternary: '#AFB5C1',
          quinary: '#E9EEF2',
        },
        white: {
          background: '#FBFBFA',
          primary: '#FFFFFF',
          secondary: 'rgba(251, 251, 250, 0.80)',
          tetriary: 'rgba(251, 251, 250, 0.60)',
          quaternary: 'rgba(251, 251, 250, 0.30)',
          quinary: 'rgba(251, 251, 250, 0.15)',
        },
      },
      boxShadow: {
        'custom': '-16px 36px 36px 0px rgba(101, 50, 37, 0.10)',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      spacing: {
        '7xl': '14rem',
        '6xl': '11rem',
        '5xl': '10rem',
        '4xl': '8.5rem',
        '3xl': '7.5rem',
        'xxl': '6.5rem',
        'xl': '5rem',
        'l': '4rem',
        'm': '3rem',
        's': '2.5rem',
        'xs': '2rem',
        'xxs': '1.5rem',
        '3xs': '1.25rem',
        '4xs': '1rem',
        '5xs': '0.75rem',
        '6xs': '0.5rem',
        '7xs': '0.25rem',
      },
      screens: {
        'xs': "0px",
        'sm': "480px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1280px",
        '2xl': "1920px",
      },
    },
  },
  plugins: [],
};
