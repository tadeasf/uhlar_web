/** @format */

import { graphql, useStaticQuery } from "gatsby";

const useAllReferences = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReferences {
        edges {
          node {
            title
            createdAt
            content {
              raw
            }
          }
        }
      }
    }
  `);

  return data.allContentfulReferences.edges.map((edge) => ({
    ...edge.node,
  }));
};

export default useAllReferences;
