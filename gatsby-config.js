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
        head: true, // Defines where to place the tracking script - `true` in the head and `false` in the body
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "cd59598f-1c85-4f57-9b12-f47f7d769589",
        srcUrl: "https://analytics.zizcon.cz/script.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
};
