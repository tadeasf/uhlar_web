import styled from "styled-components"

export const SimpleBannerStyles = styled.section`
  height: 55vh;
  min-height: 320px;
  position: relative;
  overflow: hidden;

  /* GatsbyImage předávaný jako children dostane třídu banner__image */
  .banner__image {
    position: absolute !important;
    inset: 0;
    z-index: 1;
    width: 100% !important;
    height: 100% !important;

    img {
      object-fit: cover !important;
      object-position: center 25% !important;
    }
  }

  .gradient {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
      to top,
      rgba(10,10,10,0.92) 0%,
      rgba(10,10,10,0.55) 40%,
      rgba(10,10,10,0.2) 100%
    );
  }

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 0 var(--borderSpacing);
    position: relative;
    z-index: 3;
  }

  .banner__content {
    padding-bottom: 2.5rem;
    max-width: 700px;

    h1 {
      font-family: 'Cinzel', serif;
      font-size: var(--bannerTitle);
      font-weight: 600;
      letter-spacing: 0.06em;
      text-shadow: var(--textShadow);
      margin: 0;
      display: inline-block;
      border-bottom: 1px solid rgba(191,161,69,0.4);
      padding-bottom: 0.2em;
    }
  }
`
