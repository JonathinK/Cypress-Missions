import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/site-theme';
import { Helmet } from 'react-helmet';

export const Provider = ({ element }) => (
  <>
    <Helmet>   
      <link rel="preload" href="https://use.typekit.net/doy6ebw.css" as="style" />
      <link rel="stylesheet" href="https://use.typekit.net/doy6ebw.css" />
      <link rel="dns-prefetch" href="https://use.typekit.net/doy6ebw.css" />
      <link rel="preconnect" href="https://use.typekit.net/doy6ebw.css" crossOrigin="anonymous"/>
      <link rel="dns-prefetch" href="https://cdn.contentful.com" />
      <link rel="preconnect" href="https://cdn.contentful.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://images.ctfassets.net" />
      <link rel="preconnect" href="https://images.ctfassets.net" crossOrigin="anonymous" />
      <style>
        {`
          @font-face {
            font-display: swap;
          }
        `}
      </style>
      
    </Helmet>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </>
)



