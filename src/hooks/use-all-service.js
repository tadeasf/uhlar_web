/** @format */

import { graphql, useStaticQuery } from "gatsby";

const useAllService = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService {
        edges {
          node {
            title
            sku
            headerImage {
              gatsbyImageData
            }
            description {
              raw
            }
            gatsbyPath(filePath: "/services/{contentfulService.sku}")
          }
        }
      }
    }
  `);

  return data.allContentfulService.edges.map((edge) => ({
    ...edge.node,
  }));
};

export default useAllService;
