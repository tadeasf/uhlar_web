/** @format */

import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import ProductFeed from "../components/Feeds/ProductFeed";
import PostFeed from "../components/Feeds/PostFeed";
import ReferenceFeed from "../components/Feeds/ReferenceFeed";
import ServiceFeed from "../components/Feeds/ServiceFeed";
import { PageTitleStyles } from "../components/PageTitle/PageTitleStyles";

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
        <div className="section">
          <div className="feed">{getTemplate(contentfulPage)}</div>
        </div>
      </Layout>
    </>
  );
};

export default FeedTemplate;
