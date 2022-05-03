import { motion } from 'framer-motion';
import { Link } from 'gatsby';
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
  }

  .link {
    padding: 1rem;
  }

  .link-github {
    &:hover {
      color: var(--color-success);
    }
    &:focus {
      color: var(--color-success);
    }
  }

  .link-dev {
    &:hover {
      color: var(--color-error);
    }
    &:focus {
      color: var(--color-error);
    }
  }

  .link-codepen {
    &:hover {
      color: var(--color-alert);
    }
    &:focus {
      color: var(--color-alert);
    }
  }

  .link-home {
    &:hover {
      color: var(--color-primary);
    }
    &:focus {
      color: var(--color-primary);
    }
  }
`;

const iconStyles = { fontSize: '1.75em' };

const Footer = function () {
  return (
    <FooterStyles>
      <div className="links">
        <a
          href="https://github.com/MattDClarke"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-github"
          aria-label="GitHub"
        >
          <div>
            <FiGithub style={iconStyles} />
          </div>
        </a>

        <a
          href="https://dev.to/mattdclarke"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-dev"
          aria-label="DEV"
        >
          <div>
            <FaDev style={iconStyles} />
          </div>
        </a>

        <a
          href="https://codepen.io/MattDC1"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-codepen"
          aria-label="CodePen"
        >
          <div>
            <FaCodepen style={iconStyles} />
          </div>
        </a>
      </div>

      <motion.span
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        ©{' '}
        <Link to="/" className="link-home">
          Matt D. Clarke
        </Link>{' '}
        2022
      </motion.span>
    </FooterStyles>
  );
};

export default Footer;
