import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;

  .banner__image {
    position: absolute;
    inset: 0;
    z-index: 1;
    > div, img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      object-position: center 20%;
    }
  }

  .gradient {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
      to top,
      rgba(10,10,10,0.95) 0%,
      rgba(10,10,10,0.55) 35%,
      rgba(10,10,10,0.05) 100%
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
    padding-bottom: 3rem;
    max-width: 680px;

    h1 {
      font-size: var(--bannerTitle);
      text-shadow: var(--textShadow);
      margin: 0 0 0.4em 0;
      display: inline-block;
      border-bottom: 1px solid rgba(191,161,69,0.4);
      padding-bottom: 0.2em;
    }

    h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(16px, 2vw, 22px);
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0;
      color: rgba(255,255,255,0.65);
      text-shadow: var(--textShadow);
      margin: 0 0 1.5rem 0;
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;
  }
`
