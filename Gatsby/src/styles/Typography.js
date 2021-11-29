import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  html {
    font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    color: var(--color-text);
    // Add accessible line-height. Improve text rendering
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  p, li {
    letter-spacing: 0.5px;
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
