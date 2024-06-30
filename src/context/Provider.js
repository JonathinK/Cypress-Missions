import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/site-theme';

export const Provider = ({ element }) => {
  return(
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}