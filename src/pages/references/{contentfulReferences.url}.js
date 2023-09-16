import React from "react";
import { graphql } from "gatsby";
import ReferenceTemplate from "../../templates/references-template"; // Make sure to create this template
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";

const Reference = ({ data: { contentfulReferences } }) => {
  return (
    <>
      <Seo title={contentfulReferences.title} />
      <Layout>
        <ReferenceTemplate {...contentfulReferences} />
      </Layout>
    </>
  );
};

export const data = graphql`
  query referenceQuery($id: String) {
    contentfulReferences(id: { eq: $id }) {
      title
      url
      introduction
      content {
        raw
      }
      createdAt(formatString: "DD MMMM, YYYY")
    }
  }
`;

export default Reference;
