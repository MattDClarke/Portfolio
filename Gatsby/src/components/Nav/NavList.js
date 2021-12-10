import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkToggle from '../DarkToggle';

const NavListStyles = styled.nav`
  display: flex;
  z-index: 1;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color-gray-200);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
  }
  ul {
    display: flex;
    padding: 0 1rem;
    list-style: none;
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: var(--color-gray-200);
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }
  }

  li {
    font-size: 1.125rem;
    text-decoration: none;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
    }

    a {
      color: var(--color-text);
    }
  }
  a {
    text-decoration: none;
  }
`;

const NavList = function ({ open, setOpen }) {
  return (
    <NavListStyles className="nav-items" open={open}>
      <ul open={open}>
        <li>
          <Link to="/#projects" onClick={() => setOpen(false)}>
            My Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <DarkToggle />
    </NavListStyles>
  );
};

export default NavList;
