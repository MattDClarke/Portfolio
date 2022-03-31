import React from 'react';

import { FormspreeProvider } from '@formspree/react';
import { ThemeProvider } from './ThemeContext';
import { PageViewProvider } from './PageViewContext';

const App = function ({ children }) {
  return (
    <ThemeProvider>
      <PageViewProvider>
        <FormspreeProvider project="1833196099410591281">
          {children}
        </FormspreeProvider>
      </PageViewProvider>
    </ThemeProvider>
  );
};

export default App;
