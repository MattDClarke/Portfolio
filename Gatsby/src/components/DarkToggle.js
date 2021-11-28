import React from 'react';
import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { MdOutlineDarkMode } from 'react-icons/md';

import { ThemeContext } from './ThemeContext';

const DarkModeToggleStyles = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
    border-radius: 34px;
    background-color: var(--color-secondary);
    transition: 0.4s;
  }

  /* .slider:before { */
  .slider-thumb {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: var(--color-primary);
    transition: 0.4s;
    transform: rotate(1deg);

    svg {
      height: 26px;
      width: 26px;
    }
  }

  input:checked + .slider {
    background-color: var(--color-secondary);
  }

  input:focus + .slider {
    transform: scale(1.1);
  }

  input:checked + .slider .slider-thumb {
    transform: translateX(26px) rotate(90deg);
  }
`;

const DarkToggle = () => {
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
          {colorMode === 'dark' ? <FiSun /> : <MdOutlineDarkMode />}
        </span>
      </span>
    </DarkModeToggleStyles>
  );
};

export default DarkToggle;
