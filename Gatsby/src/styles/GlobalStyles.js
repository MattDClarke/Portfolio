import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-transition: 'none';
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    transition: var(--color-transition);
  }
`;

export default GlobalStyles;
