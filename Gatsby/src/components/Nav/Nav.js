import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';

const NavStyles = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: 700;
  .logo a {
    text-decoration: none;
    color: var(--color-primary);
    font-size: 1.25rem;
  }
`;

const Nav = function () {
  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">Matt D. Clarke</Link>
      </div>
      <NavItems />
    </NavStyles>
  );
};

export default Nav;
