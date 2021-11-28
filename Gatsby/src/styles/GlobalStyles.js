import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    transition: background-color 0.5s ease;
  }
`;

export default GlobalStyles;
