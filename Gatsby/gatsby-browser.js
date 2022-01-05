import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import App from './src/components/App';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout {...props}>{element}</Layout>
    </>
  );
}

export const wrapRootElement = ({ element }) => <App>{element}</App>;
