import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import Header from './Header';
import Nav from './Nav/Nav';

const ContentStyles = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 65px 1.0875rem 1.45rem;
`;

const Layout = function ({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ContentStyles>
      <Nav />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <main>{children}</main>
    </ContentStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
