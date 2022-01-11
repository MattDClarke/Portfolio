import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-text);
    // Add accessible line-height. Improve text rendering
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 4rem;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    padding-bottom: 2.8rem;
    }

    @media (max-width: 600px) {
      font-size: 2.4rem;
      padding-bottom: 2rem;
    }
    @media (max-width: 400px) {
      font-size: 1.96rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    padding: 2rem 0;

    @media (max-width: 900px) {
      font-size: 2.25rem;
      padding: 1.4rem 0;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
      padding: 1rem 0;
    }

    @media (max-width: 400px) {
      font-size: 1.62rem;
    }
  }

  h3 {
    font-size: 2rem;
    padding-bottom: 1rem;

    @media (max-width: 900px) {
      font-size: 1.8rem;
      padding: 0.7rem 0;
    }

    @media (max-width: 600px) {
      font-size: 1.6rem;
      padding: 0.5rem 0;
    }
    @media (max-width: 400px) {
      font-size: 1.3rem;
    }
  }

  p, li {
    max-width: 75ch;
    padding-bottom: 2rem;

    @media (max-width: 900px) {
      padding-bottom: 1.4rem;
    }

    @media (max-width: 600px) {
      padding-bottom: 1rem;
    }
  }
  p {
    font-size: 1.188rem;

    @media (max-width: 600px) {
        font-size: 1rem;
      }
  }

  a {
    color: var(--color-secondary);
  }

  // remove built-in form typography styles
  input, button, textarea, select {
    font: inherit;
  }
  button {
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--color-background);

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }

  small {
    color: var(--color-error);
  }

`;

export default Typography;
