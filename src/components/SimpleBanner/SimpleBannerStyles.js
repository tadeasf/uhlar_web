/** @format */

import styled from "styled-components";

export const SimpleBannerStyles = styled.section`
  height: 70vh;
  min-height: 400px;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;

    /* Gatsby Image uvnitř */
    > div, img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      object-position: center 30%;
    }
  }

  /* Fallback pro statické img tagy */
  img.banner__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .banner__content {
    position: relative;
    z-index: 3;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      font-size: var(--bannerTitle);
      display: inline-block;
      text-shadow: var(--textShadow);

      /* Zlatá linka pod nadpisem */
      border-bottom: 1px solid rgba(191, 161, 69, 0.5);
      padding-bottom: 0.2em;
    }
  }
`;
