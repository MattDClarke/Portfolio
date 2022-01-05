import React from 'react';

import { FormspreeProvider } from '@formspree/react';
import { ThemeProvider } from './ThemeContext';
// import GlobalStyles from '../styles/GlobalStyles';
// import Typography from '../styles/Typography';

const App = function ({ children }) {
  return (
    <ThemeProvider>
      {/* <GlobalStyles />
      <Typography /> */}
      <FormspreeProvider project="1833196099410591281">
        {children}
      </FormspreeProvider>
    </ThemeProvider>
  );
};

export default App;
