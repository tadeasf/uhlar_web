/** @format */

import React from "react";
import Seo from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import BannerModule from "../components/BannerModule/BannerModule";
import Faq from "../components/Faq/Faq";
import Features from "../components/Features/Features";
import RichText from "../components/RichText";

const ServiceTemplateStyles = styled.div`
  // Add your custom styles for the Service template here.
`;

const ServiceTemplate = (contentfulService) => {
  const {
    headerImage,
    title,
    price,
    introduction,
    description,
    faqs,
    gallery,
  } = contentfulService;
  const serviceHeaderImage = getImage(headerImage);
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        price={price}
        subTitle={introduction}
        enquire={true}
      >
        <GatsbyImage
          className="banner__image"
          image={serviceHeaderImage}
          alt={title}
        />
      </BannerModule>
      <ServiceTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              <RichText richText={description} />
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                );
              })}
            </div>
          )}
        </div>
      </ServiceTemplateStyles>
      {gallery && (
        <ProductGallery className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              let galleyImage = getImage(item);
              return <GatsbyImage key={index} image={galleyImage} />;
            })}
          </div>
        </ProductGallery>
      )}
      <Features
        title="Other Projects."
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
    </>
  );
};

export default ServiceTemplate;
