export default {
  border: {
    radius: {
      medium: '0.8rem',
      large: '1.5rem'
    }
  },
  font: {
    family: 'Poppins, sans-serif',
    weight: {
      regular: 400,
      semiBold: 500,
      bold: 700
    },
    sizes: {
      xsmall: '0.75rem', // 12px
      small: '0.875rem',
      regular: '1rem',
      xlarge: '2.5rem' // 40px
    }
  },
  colors: {
    gray100: '#F2F2F2',
    gray200: '#D9D9D9',
    gray300: '#808080',
    gray400: '#333333',
    gray500: '#262626',
    gray600: '#1A1A1A',
    gray700: '#0D0D0D',

    purple: '#8284FA',
    purpleDark: '#5E60CE',
    blue: '#4EA8DE',
    blueDark: '#1E6F9F',
    danger: '#E25858',

    white: '#FFFFFF',
    black: '#000000'
  },
  containers: {
    desktop: '46rem'
  }
} as const
