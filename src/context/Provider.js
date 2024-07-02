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
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests;" />
      <meta
        http-equiv="Content-Security-Policy-Report-Only"
        content="
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://trustedscripts.example.com https://use.typekit.net;
          style-src 'self' 'unsafe-inline' https://use.typekit.net;
          font-src 'self' data: https://use.typekit.net;
          img-src 'self' data: https://images.ctfassets.net;
          connect-src 'self' https://cdn.contentful.com https://images.ctfassets.net;
          object-src 'none';
          base-uri 'self';
          form-action 'self';
          report-uri /csp-violation-report-endpoint;
        "
      />
   
      <script>
        {`
          (function(d) {
            var config = {
              kitId: 'doy6ebw',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `}
        </script>
    </Helmet>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </>
)

    

