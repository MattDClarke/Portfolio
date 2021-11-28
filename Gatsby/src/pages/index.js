import React from 'react';
import { Link } from 'gatsby';

import BrightTitle from '../components/BrightTitle';

const IndexPage = () => (
  <>
    <BrightTitle>Hello world!</BrightTitle>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
