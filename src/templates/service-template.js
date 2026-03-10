/** @format */

import React from "react";
import Seo from "../components/SEO";
import styled from "styled-components";
import Features from "../components/FeaturesServices/Features";
import RichText from "../components/RichText";
import { PageTitleStyles } from "../components/PageTitle/PageTitleStyles";
import Layout from "../components/Layout";

const ServiceTemplateStyles = styled.div`
  .container {
    display: flex; flex-wrap: wrap;
    .column {
      flex: 0 0 100%;
      @media(min-width:768px) {
        flex-basis: 50%;
        &:nth-child(1) { padding-right: 20px; }
        &:nth-child(2) { padding-left: 20px; }
        > *:last-child { margin-bottom: 0; }
      }
      > *:first-child { margin-top: 0; }
    }
  }
`;

const ServiceTemplate = (contentfulService) => {
  const { title, description } = contentfulService;
  return (
    <>
      <Seo title={title} />
      <Layout>
        <PageTitleStyles>
          <h1>{title}<span>.</span></h1>
        </PageTitleStyles>
        <ServiceTemplateStyles className="section">
          <div className="container container__tight">
            {description && (
              <div className="column">
                <RichText richText={description} />
              </div>
            )}
          </div>
        </ServiceTemplateStyles>
        <Features title="Další služby" introduction="Podívejte se na další služby, které nabízím." />
      </Layout>
    </>
  );
};

export default ServiceTemplate;
