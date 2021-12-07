import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-transition: 'none';
    --color-success: hsl(160deg, 100%, 40%);
    --color-error: hsl(340deg, 95%, 50%);
    --color-alert: hsl(37deg, 100%, 50%);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  ::selection {
    background: var(--color-selection);
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

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

`;

export default GlobalStyles;
