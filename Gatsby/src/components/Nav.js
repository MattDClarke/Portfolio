import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkToggle from './DarkToggle';

const NavStyles = styled.nav`
  display: flex;
  align-items: baseline;
  font-weight: 700;
  .logo a {
    color: var(--color-primary);
    font-size: 1.25rem;
  }
  .spacer {
    flex: 1;
  }
  .menu-items {
    display: flex;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0 1rem;
    list-style: none;
  }
  li {
    font-size: 1.125rem;
    text-decoration: none;
    padding: 0 1rem;

    a {
      color: var(--color-text);
    }
  }
  a {
    text-decoration: none;
  }
`;

const Nav = function () {
  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">Matt D. Clarke</Link>
      </div>
      <div className="spacer" />
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/#projects">My Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
        <DarkToggle />
      </div>
    </NavStyles>
  );
};

export default Nav;
