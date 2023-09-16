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
module.exports = {
  siteMetadata: {
    title: "Martin Uhlář",
    description: "Martin Uhlář - Genealogické služby",
    author: "Tadeáš Fořt",
    twitterUsername: "FortTadeas",
    facebookUsername: "Tadeas.Fort",
    instagramUsername: "whostoletedsusername",
    linkedinUsername: "tadeáš-fořt-317ab1124",
    image: "/header-uhlar.jpg",
    siteUrl: "https://www.martinuhlar.cz",
    developerName: "Tadeáš Fořt",
    developerUrl: "https://www.tadeasfort.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "qzxt9xus3u3o",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "6MyOcWZhki2zcqcbr3GMIAuSa_49ndUxGr63UirbpHc",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
};
