/** @format */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        author
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);

  const { siteDesc, siteTitle, siteUrl, image } = site.siteMetadata;
  return (
    <Helmet htmlAttribute={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  );
};

export default SEO;
