/** @format */

import { graphql, useStaticQuery } from "gatsby";

const useFeaturedService = () => {
  const {
    allContentfulService: { nodes },
  } = useStaticQuery(graphql`
    query featuredServiceLinksQuery {
      allContentfulService(
        sort: { fields: createdAt, order: DESC }
        limit: 3
      ) {
        nodes {
          title
          sku
          gatsbyPath(filePath: "/services/{contentfulService.sku}")
          introduction
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  return nodes;
};

export default useFeaturedService;
