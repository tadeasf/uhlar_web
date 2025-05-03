/** @format */

import React from "react";
import Seo from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import BannerModule from "../components/BannerModule/BannerModule";
import Faq from "../components/Faq/Faq";
import Features from "../components/FeaturesServices/Features";
import RichText from "../components/RichText";

const ServiceTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`;

const ProductGallery = styled.section`
  width: 100%;

  > .container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) / 2);

    @media (min-width: 1024px) {
      gap: var(--gap);
    }

    > * {
      width: calc(50% - 10px);

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 1024px) {
        width: calc(25% - 30px);
      }
    }
  }
`;
const ServiceTemplate = (contentfulService) => {
  const {
    headerImage,
    title,
    description,
  } = contentfulService;
  const serviceHeaderImage = getImage(headerImage);
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
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
        </div>
      </ServiceTemplateStyles>
      <Features
        title="Další služby"
        introduction="Podívejte se na další služby, které nabízím."
      />
    </>
  );
};

export default ServiceTemplate;
