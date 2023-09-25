/** @format */

import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import BannerModule from "../components/BannerModule/BannerModule";
import Features from "../components/Features/Features";
import LatestPosts from "../components/Post/LatestPosts";

const Index = () => {
  return (
    <>
      <Seo title="Domovská stránka" />
      <Layout>
        <BannerModule
          title="Genealogické služby"
          subTitle="Místo, kde společně poznáváme rodovou historii."
        />
        <Features title="Nejnovější projekty" />
        <LatestPosts title="Aktuality a postřehy" />
      </Layout>
    </>
  );
};

export default Index;
