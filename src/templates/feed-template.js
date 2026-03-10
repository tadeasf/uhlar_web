/** @format */

import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import ProductFeed from "../components/Feeds/ProductFeed";
import PostFeed from "../components/Feeds/PostFeed";
import ReferenceFeed from "../components/Feeds/ReferenceFeed";
import ServiceFeed from "../components/Feeds/ServiceFeed";
import { PageTitleStyles } from "../components/PageTitle/PageTitleStyles";
import styled from "styled-components";

const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 var(--borderSpacing);
  margin: var(--sectionMargin) auto;
  max-width: 1400px;
  width: 100%;
  box-sizing: border-box;

  @media(min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
  }
`;

const getTemplate = (contentfulPage) => {
  const { feedType } = contentfulPage;
  switch (feedType) {
    case "Products":   return <ProductFeed {...contentfulPage} />;
    case "References": return <ReferenceFeed {...contentfulPage} />;
    case "Services":   return <ServiceFeed {...contentfulPage} />;
    default:           return <PostFeed {...contentfulPage} />;
  }
};

const FeedTemplate = (contentfulPage) => {
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <PageTitleStyles>
          <h1>{contentfulPage.title}<span>.</span></h1>
        </PageTitleStyles>
        <FeedGrid>
          {getTemplate(contentfulPage)}
        </FeedGrid>
      </Layout>
    </>
  );
};

export default FeedTemplate;
