import { createTheme } from '@mui/material/styles';

import ActorRegularWoff2 from '../fonts/Actor-Regular.woff2';
import ActorRegularWoff from '../fonts/Actor-Regular.woff';
import ActorRegularTtf from '../fonts/Actor-Regular.ttf';

import { mainColor, subtitleColor, mainBgColor } from '../styles/colors';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        body {
          background-color: ${mainBgColor};
        }
        @font-face {
          font-family: 'Actor, sans-serif';
          src: local('Actor'), local('Actor-Regular'), url(${ActorRegularWoff2}) format('woff2'),
            local('Actor'), local('Actor-Regular'), url(${ActorRegularWoff}) format('woff2'),
            local('Actor'), local('Actor-Regular'), url(${ActorRegularTtf}) format('woff');
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  typography: {
    fontFamily: ['Actor', '-apple-system', 'Helvetica Neue', 'sans-serif'].join(
      ','
    ),

    h1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '36px',
      lineHeight: '43px',
      textTransform: 'capitalize',
      color: mainColor,
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '28px',
      textTransform: 'capitalize',
      color: mainColor,
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '26px',
      textTransform: 'capitalize',
      color: mainColor,
    },
    subtitle1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      textTransform: 'capitalize',
      color: subtitleColor,
    },
  },
});
