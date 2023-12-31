import React from "react";
import { graphql } from "gatsby";
import ServiceTemplate from "../../templates/service-template"; // Make sure to create this template
import Seo from "../../components/SEO";
import Layout from "../../components/Layout";

const Service = ({ data: { contentfulService } }) => {
  return (
    <>
      <Seo title={contentfulService.title} />
      <Layout>
        <ServiceTemplate {...contentfulService} />
      </Layout>
    </>
  );
};

export const data = graphql`
  query serviceQuery($id: String) {
    contentfulService(id: { eq: $id }) {
      title
      sku
      introduction
      price
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
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
        gatsbyImageData(
          width: 1000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default Service;
