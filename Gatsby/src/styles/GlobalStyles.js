import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-transition: 'none';
    --main-opacity: 1;
    --main-blur: 0;
    --main-pointer-events: 'auto';
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

  main {
    opacity: var(--main-opacity);
    filter: blur(var(--main-blur));
    pointer-events: var(--main-pointer-events);
    transition: opacity 0.3s ease-in-out;
  }

  section {
    padding: 3rem 0;
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

  form {
    label {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  button {
    display: block;
    background: var(--color-primary);
    border: 2px solid hsl(0deg, 0%, 10%);
    --cast: 3px;
    box-shadow: 0 var(--cast) 0 0 hsl(0deg, 0%, 10%);
    padding: 0.6rem 1rem;
    margin: 1rem 0;
    border-radius: 6px;
    cursor: pointer;
    will-change: transform opacity;
    transition: all 0.3s;
    &:hover {
      --cast: 2px;
      opacity: 0.9;
      transform: translateY(1px);
    }
    &[disabled] {
      opacity: 0.5;
    }
  }

  input, textarea {
    display: block;
    position: relative;
    width: 500px;
    border: 2px solid var(--color-text);
    border-radius: 6px;
    padding: 0.5rem 0.5rem;

    & + small {
      display: block;
      height: 1.5rem;
      font-weight: 700;
    }
  }

  textarea {
    max-width: 500px;
    min-width: 500px;
    min-height: 200px;
    max-height: 500px;
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

  .text-link {
    --rotate: -1deg;
    --scaleX: 1;
    position: relative;

    &:before {
      height: 2px;
      position: absolute;
      border-radius: 0 100% 100% 0;
      background: var(--color-secondary);
      content: "";
      width: 100%;
      bottom: 1px;
      transition: transform 0.3s ease-in-out;
      transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
    }
    &:hover {
      --rotate: 0deg;
      --scaleX: 1.05;
    }
    &:focus {
      --rotate: 0deg;
      --scaleX: 1.05;
    }
  }
`;

export default GlobalStyles;
