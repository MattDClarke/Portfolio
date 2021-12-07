import React from 'react';
import styled from 'styled-components';
import { BsSunFill } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';

import { ThemeContext } from './ThemeContext';

const DarkModeToggleStyles = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 27.2px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 27.2px;
    background-color: var(--color-secondary);
    transition: 0.4s;
  }

  /* .slider:before { */
  .slider-thumb {
    position: absolute;
    content: '';
    height: 20.8px;
    width: 20.8px;
    left: 3.2px;
    bottom: 3.2px;
    border-radius: 50%;
    background-color: var(--color-text);
    transition: 0.4s;
    transform: rotate(1deg);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

    svg {
      height: 20.8px;
      width: 20.8px;
      padding: 0.2rem;
      fill: var(--color-background);
    }
  }

  input:checked + .slider {
    background-color: var(--color-secondary);
  }

  // only add outline if keyboard navigation
  input:focus-visible + .slider {
    outline: 2px auto var(--color-primary);
    outline-offset: 1px;
  }

  input:checked + .slider .slider-thumb {
    transform: translateX(20.8px) rotate(90deg);
  }
`;

const DarkToggle = function () {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  function handleToggle(e) {
    setColorMode(e.target.checked ? 'dark' : 'light');
  }

  // dnt show on initial page load until React app rehydrates
  if (!colorMode) {
    return null;
  }

  return (
    <DarkModeToggleStyles htmlFor="darkModeToggle">
      <input
        id="darkModeToggle"
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={handleToggle}
      />
      <span className="slider">
        <span className="slider-thumb">
          {colorMode === 'dark' ? <BsSunFill /> : <MdOutlineDarkMode />}
        </span>
      </span>
    </DarkModeToggleStyles>
  );
};

export default DarkToggle;
