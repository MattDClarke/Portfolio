import React from 'react';
import { FaCodepen, FaDev } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  .links {
    display: flex;
    padding-bottom: 1rem;
  }

  a {
    color: var(--color-text);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--color-primary);
    }
    &:focus {
      color: var(--color-primary);
    }
  }

  .link {
    padding: 1rem;
  }
  .icon {
    width: 1em;
    margin: auto;
  }
`;

const Footer = function () {
  return (
    <FooterStyles>
      <div className="links">
        <a
          href="https://github.com/MattDClarke"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <div className="icon">
            <FiGithub />
          </div>

          <div>GitHub</div>
        </a>

        <a
          href="https://dev.to/mattdclarke"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <div className="icon">
            <FaDev />
          </div>

          <div>DEV</div>
        </a>

        <a
          href="https://codepen.io/MattDC1"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <div className="icon">
            <FaCodepen />
          </div>

          <div>CodePen</div>
        </a>
      </div>

      <span>
        ©{' '}
        <a
          href="https://www.mattdclarke.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matthew Clarke
        </a>{' '}
        2021
      </span>
    </FooterStyles>
  );
};

export default Footer;
