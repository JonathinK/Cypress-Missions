require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Cypress Missions`,
    description: `Cypress Missions is a non-profit organization that helps rebuild communities in need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://cypressmissions.com`,
  },
  flags: {
    FAST_DEV: false,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { /*Gatsby Source Filesystem*/
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {/*Gatsby Plugin Manifest */
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/CypressLogo2.png`, // This path is relative to the root of the site.
      },
    },
    {/*Gatsby Plugin Contentful*/
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId: process.env.CYPRESS_CONTENTFUL_SPACE_ID,
        accessToken: process.env.CYPRESS_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
        downloadLocal: false,
        environment:"production",

      }
    },
    {/*Gatsby Svg Loader*/
    resolve: "gatsby-plugin-react-svg",
    options:{
      rule: {
        include: /assets/
      }
    }
    },
  ],
}
    