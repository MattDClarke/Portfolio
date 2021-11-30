export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: '#f8f5f2', // off-white
    dark: 'hsl(250deg, 70%, 7%)', // navy blue
  },
  primary: {
    light: '#078080', // pastele green
    dark: '#7f5af0', // purple
  },
  secondary: {
    light: '#f45d48', //  orange
    dark: '#b8c1ec', // darkish grey
  },
  tertiary: {
    light: '#f8f5f2', // off white
    dark: '#2cb67d', // green
  },
  selection: {
    light: '#ff9800', // orange
    dark: '#e65100', // dark orange
  },

  // Greys, scaling from least-noticeable to most-noticeable
  'gray-100': {
    light: 'hsl(225deg, 25%, 95%)',
    dark: 'hsl(210deg, 15%, 20%)',
  },
  'gray-200': {
    light: 'hsl(225deg, 16%, 90%)',
    dark: 'hsl(210deg, 15%, 25%)',
  },
  'gray-300': {
    light: 'hsl(225deg, 8%, 80%)',
    dark: 'hsl(210deg, 10%, 40%)',
  },
  'gray-400': {
    light: ' hsl(225deg, 8%, 70%)',
    dark: 'hsl(210deg, 9%, 45%)',
  },
  'gray-500': {
    light: 'hsl(225deg, 7%, 60%)',
    dark: 'hsl(210deg, 8%, 50%)',
  },
  'gray-600': {
    light: 'hsl(225deg, 15%, 50%)',
    dark: 'hsl(210deg, 12%, 55%)',
  },
  'gray-700': {
    light: 'hsl(225deg, 12%, 40%)',
    dark: 'hsl(210deg, 14%, 66%)',
  },
  'gray-900': {
    light: 'hsl(225deg, 25%, 20%)',
    dark: 'hsl(210deg, 25%, 88%)',
  },
  'gray-1000': {
    light: 'hsl(225deg, 12%, 40%)',
    dark: 'hsl(225deg, 15%, 15%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
