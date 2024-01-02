/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * @format
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(
  process.env.CONTENTFUL_SPACE_ID,
  process.env.CONTENTFUL_ACCESS_TOKEN
);
module.exports = {
  siteMetadata: {
    title: "Martin Uhlář",
    description: "Martin Uhlář - Genealogické služby",
    author: "Tadeáš Fořt",
    facebookUsername: "martin.uhlar.54",
    linkedinUsername: "martin-uhlář-7681a9152",
    image: "/header-uhlar.jpg",
    siteUrl: "https://www.martinuhlar.cz",
    developerName: "Tadeáš Fořt",
    developerUrl: "https://www.tadeasfort.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://martinuhlar.cz",
        sitemap: "https://martinuhlar.cz/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-YB6RXJLY94", // Replace with your Google Analytics tracking ID
        // Optional fields, see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
        head: true, // Defines where to place the tracking script - `true` in the head and `false` in the body
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
};
