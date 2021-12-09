import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import useToggleState from '../../utils/useToggle';
import NavList from './NavList';

const NavItemStyles = styled.nav`
  display: flex;

  button {
    display: none;
    width: 2rem;
    height: 2rem;
    padding: 0;
    z-index: 1;
    background: none;
    border: none;
    overflow: hidden;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
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
  return (
    <NavItemStyles open={open}>
      <button type="button" onClick={setOpen}>
        <div />
        <div />
        <div />
      </button>
      <NavList open={open} />
    </NavItemStyles>
  );
};

export default NavItems;
