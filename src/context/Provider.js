import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/site-theme';
import { Global } from '../styles';

export const Provider = ({ element }) => {
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      {element}
    </ThemeProvider>
  )
}