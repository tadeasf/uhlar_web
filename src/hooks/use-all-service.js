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
            createdAt
            headerImage {
              gatsbyImageData
            }
            price
            introduction
            description {
              raw
            }
            faqs {
              question
              answer {
                raw
              }
            }
            gallery {
              gatsbyImageData
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
