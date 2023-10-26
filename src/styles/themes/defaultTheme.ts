export const defaultTheme = {
  color: {
    white: '#FFFFFF',

    'yellow-100': '#F1E9C9',
    'yellow-200': '#DBAC2C',
    'yellow-300': '#C47F17',

    'purple-100': '#EBE5F9',
    'purple-200': '#8047F8',
    'purple-300': '#4B2995',

    'gray-100': '#FAFAFA',
    'gray-200': '#F3F2F2',
    'gray-300': '#EDEDED',
    'gray-400': '#E6E5E5',
    'gray-500': '#D7D5D5',
    'gray-600': '#8D8686',
    'gray-700': '#574F4D',
    'gray-800': '#403937',
    'gray-900': '#272221'
  },
  textSize: {
    'title-xl': '3rem',
    'title-l': '2rem',
    'title-m': '1.5rem',
    'title-s': '1.2rem',
    'title-xs': '1.125rem',
    'text-l': '1.25rem',
    'text-m': '1rem',
    'text-s': '0.875rem',
    'text-xs': '0.75rem',
    'text-xxs': '0.625rem'
  },
  font: {
    text: "'Roboto'",
    title: "'Baloo 2'",
  },
}

export type ThemeColor = keyof typeof defaultTheme.color;
export type ThemeTextSize = keyof typeof defaultTheme.textSize;
export type ThemeFont = keyof typeof defaultTheme.font;