import { createGlobalStyle } from 'styled-components';

import MontserratRegularFont from '../assets/fonts/montserrat-regular-webfont.woff2';
import MontserratMediumFont from '../assets/fonts/montserrat-medium-webfont.woff2';
import MontserratBoldFont from '../assets/fonts/montserrat-bold-webfont.woff2';
import MontserratItalicFont from '../assets/fonts/montserrat-italic-webfont.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularFont}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumFont}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldFont}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratItalicFont}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-text);
    // Add accessible line-height. Improve text rendering
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  p, li {
    max-width: 75ch;
  }

  a {
    color: var(--color-secondary);
  }

  // remove built-in form typography styles
  input, button, textarea, select {
    font: inherit;
  }
`;

export default Typography;
