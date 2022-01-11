import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import App from './src/components/App';
import Layout from './src/components/Layout';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

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
