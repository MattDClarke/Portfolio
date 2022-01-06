import React from 'react';

import { FormspreeProvider } from '@formspree/react';
import { ThemeProvider } from './ThemeContext';

const App = function ({ children }) {
  return (
    <ThemeProvider>
      <FormspreeProvider project="1833196099410591281">
        {children}
      </FormspreeProvider>
    </ThemeProvider>
  );
};

export default App;
