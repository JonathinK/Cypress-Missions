require("dotenv").config({
  path:`.env`,
});


module.exports = {
  siteMetadata: {
    title: `Cypress Missions`,
    description: `Cypress offers humanitarian aid to those who have been affected by natural disasters or harsh levels of poverty. We bring resources and use of construction knowledge to build back those communities.`,
    author: `@DiamondDigitalServices`,
    siteUrl: `https://www.cypressmissions.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cypress Missions`,
        short_name: `cypress`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/CypressLogo2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve:`gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
      }   
    }   
  ],
}
