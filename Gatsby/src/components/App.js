import React from 'react';

import { ThemeProvider } from './ThemeContext';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Typography />
      {children}
    </ThemeProvider>
  );
}

export default App;
