import React from 'react';
import App from './src/components/App';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => <App>{element}</App>;
