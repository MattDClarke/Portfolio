import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav/Nav';

const ContentStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 65px 2rem 1.45rem;

  @media (max-width: 768px) {
    padding-top: 55px;
  }
  @media (max-width: 600px) {
    padding-top: 45px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Layout = function ({ children }) {
  return (
    <ContentStyles>
      <Nav />
      <main>{children}</main>
      <Footer />
    </ContentStyles>
  );
};

export default Layout;
