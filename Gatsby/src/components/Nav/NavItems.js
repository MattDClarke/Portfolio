import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../utils/useOnClickOutside';
import useToggleState from '../../utils/useToggle';
import useWindowSize from '../../utils/useWindowSize';
import NavList from './NavList';

const NavItemStyles = styled.nav`
  display: flex;
  button {
    display: none;
    width: 2rem;
    height: 2rem;
    padding: 0;
    z-index: 2;
    background: none;
    border: none;
    overflow: hidden;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }

    div {
      width: 100%;
      height: 0.25rem;
      background-color: var(--color-text);
      border-radius: 10px;
      transition: all 0.3s linear;
      &:nth-child(1) {
        transform: ${({ open }) =>
          open
            ? 'rotate(45deg) translateY(160%) translateX(25%)'
            : 'rotate(0)'};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? 'rotate(-145deg) skewX(35deg)' : 'skewX(0)'};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) =>
          open
            ? 'rotate(-45deg) translateY(-200%) translateX(25%)'
            : 'rotate(0)'};
      }
    }
  }
`;

const NavItems = function () {
  const [open, setOpen] = useToggleState(false);
  const windowSize = useWindowSize();
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // prevent useOnClickOutside Effect running on every render
  const handler = useCallback(() => setOpen(false), [setOpen]);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, handler);

  useEffect(() => {
    const root = window.document.documentElement;

    if (open) {
      document.body.style.overflowY = 'hidden';
      root.style.setProperty('--main-opacity', '0.5');
      root.style.setProperty('--main-blur', '5px');
      root.style.setProperty('--main-pointer-events', 'none');
    } else {
      document.body.style.overflowY = 'unset';
      root.style.setProperty('--main-opacity', '1');
      root.style.setProperty('--main-blur', '0');
      root.style.setProperty('--main-pointer-events', 'auto');
    }
  }, [open]);

  useEffect(() => {
    if (windowSize.width > 768) {
      setOpen(false);
    }
  }, [windowSize.width, setOpen]);

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setOpen]);

  return (
    <NavItemStyles open={open} ref={ref}>
      <button type="button" onClick={setOpen}>
        <div />
        <div />
        <div />
      </button>
      <NavList open={open} setOpen={setOpen} />
    </NavItemStyles>
  );
};

export default NavItems;
