import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-transition: 'none';
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  // 3. Allow percentage-based heights
  html, body {
    height: 100%;
  }

  body {
    background: var(--color-background);
    transition: var(--color-transition);
  }

  // improve media defaults
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  // avoid text overflows
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  // Create a root (app level) stacking context instead of global - guarantees modals, tooltips, ... always on top
  #___gatsby {
    isolation: isolate;
  }

`;

export default GlobalStyles;
