import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DarkToggle from '../DarkToggle';

const NavListStyles = styled.div`
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
      padding-top: 2rem;
      transition: transform 0.3s ease-in-out;
    }
  }

  li {
    font-size: 1.125rem;
    text-decoration: none;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    a {
      color: var(--color-text);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        width: 0px;
        height: 2px;
        border-radius: 0 100% 100% 0;
        transition: all 0.6s ease-in-out;
        opacity: 0;
        right: 0;
        background-color: var(--color-text);
      }

      &:hover::after {
        width: 100%;
        opacity: 1;
      }
      &:focus::after {
        width: 100%;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    // slide in animations
    .item-projects {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform opacity;
      transition-duration: ${({ open }) => (open ? '500ms' : '0ms')};
      transition-delay: ${({ open }) => (open ? '350ms' : '300ms')};
      transition-timing-function: ${({ open }) =>
        open ? 'ease-out' : 'ease-in'};
    }
    .item-contact {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform opacity;
      transition-duration: ${({ open }) => (open ? '500ms' : '0ms')};
      transition-delay: ${({ open }) => (open ? '450ms' : '300ms')};
      transition-timing-function: ${({ open }) =>
        open ? 'ease-out' : 'ease-in'};
    }
    label {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(600%)')};
      transition: transform opacity;
      transition-duration: ${({ open }) => (open ? '500ms' : '0ms')};
      transition-delay: ${({ open }) => (open ? '550ms' : '300ms')};
      transition-timing-function: ${({ open }) =>
        open ? 'ease-out' : 'ease-in'};
    }
  }
`;

const NavList = function ({ open, setOpen }) {
  return (
    <NavListStyles open={open}>
      <ul open={open}>
        <li className="item-projects">
          <Link to="/#projects" onClick={() => setOpen(false)}>
            My projects
          </Link>
        </li>
        <li className="item-contact">
          <Link to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <DarkToggle className="item-darkToggle" />
    </NavListStyles>
  );
};

export default NavList;
