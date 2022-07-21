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

  body::-webkit-scrollbar {
    width: auto;
}


  body::-webkit-scrollbar-track {
    background: var(--color-gray-300);
  }

  body::-webkit-scrollbar-thumb {
      background-color: var(--color-secondary);
      border-radius: 6px;
  }

  // Create a root (app level) stacking context instead of global - guarantees modals, tooltips, ... always on top
  #___gatsby {
    isolation: isolate;
  }

  body {
    background: var(--color-background);
    transition: var(--color-transition);
    overflow-x: hidden;
  }

  main {
    opacity: var(--main-opacity);
    filter: blur(var(--main-blur));
    pointer-events: var(--main-pointer-events);
    transition: opacity 0.3s ease-in-out;
  }

  section {
    padding: 3rem 0;

    @media (max-width: 900px) {
      padding: 2.1rem 0;
    }

    @media (max-width: 600px) {
      padding: 1.5rem 0;
    }
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

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  form {
    label {
      font-size: 1.25rem;
      font-weight: 700;

      @media (max-width: 900px) {
        font-size: 1rem;
      }
    }

  }

  button {
    display: inline-block;
    position: relative;
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--color-background);
    background: var(--color-text);
    padding: 0.6rem 1rem;
    margin: 1rem 0;
    border: 0;
    cursor: pointer;

    :after {
      position: absolute;
      content: attr(data-content);;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 2px solid var(--color-text);
      background-color: var(--color-primary);
      color: var(--color-background);
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translate(-.2rem,-.2rem);
      transition: transform .3s cubic-bezier(.34,1.56,.64,1);
    }

    &:hover,
    &:focus {
      :after {
        transform: translate(0);
      }
    }
    &[disabled] {
      opacity: 0.5;
    }
  }

  input, textarea {
    display: block;
    position: relative;
    width: 100%;
    max-width: 500px;
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
    min-width: 500px;
    min-height: 200px;
    max-height: 500px;

    @media (max-width: 535px) {
      min-width: 100%;
      max-width: 80vw;
    }
  }

  [aria-label] {
    position: relative;
  }

  [aria-label]:after {
    content: attr(aria-label);
    opacity: 0;
    position: absolute;
    left: 50%;
    top: -100%;
    transform: translatex(-50%);
    z-index: 1;
    pointer-events: none;
    padding: 1em;
    white-space: nowrap;
    font-size: 0.9rem;
    color: var(--color-background);
    background-color: var(--color-secondary);
    border-radius: 3px;
    box-shadow: 1px 2px 6px var(--color-gray-300);
    transition: opacity 0.3s ease-in-out;
  }

  [aria-label]:hover:after, [aria-label]:focus:after {
    opacity: 1;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    li {
      width: 150px;
      padding: 0.5rem 0;
      font-weight: 500;

      &:before {
        content: '';
        background: var(--color-secondary);
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        display: inline-block;
        line-height: 0.5rem;
        color: white;
        text-align: center;
        margin-right: 0.5rem;
      }
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
  
  .writing-list {
    list-style: none;
    padding-left: 0;
    li {
      padding: 0.5rem 0;
      font-weight: 500;

      &:before {
        content: '';
        background: var(--color-secondary);
        width: 0.75rem;
        height: 0.75rem; 
        border-radius: 50%;
        display: inline-block;
        line-height: 0.5rem;
        color: white;
        text-align: center;
        margin-right: 0.5rem;
      }
      
      a {
        color: var(--color-text);
        text-decoration: underline;
      }
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }


  .text-link {
    --rotate: -1deg;
    --scaleX: 1;
    position: relative;
    color: var(--color-text);
    transition: color 0.3s ease-in-out;
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
      color: var(--color-primary);
    }
    &:focus {
      --rotate: 0deg;
      --scaleX: 1.05;
      color: var(--color-primary);
    }
  }

  .color-primary {
    color: var(--color-primary);
  }

  .internal-link {
    display: inline-block;
    position: relative;
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--color-background);
    background: var(--color-text);
    padding: 0.6rem 1rem;
    cursor: pointer;

    :after {
      position: absolute;
      content: attr(title);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 2px solid var(--color-text);
      background-color: var(--color-primary);
      color: var(--color-background);
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translate(-.2rem,-.2rem);
      transition: transform .3s cubic-bezier(.34,1.56,.64,1);
    }

    &:hover,
    &:focus {
      :after {
        transform: translate(0);
      }
    }

    // only add outline if keyboard navigation
    &:focus-visible {
      outline: 2px auto var(--color-primary);
    }

    @media (max-width: 900px) {
      padding: 0.42rem 0.7rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 6px;
  }

`;

export default GlobalStyles;
