import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .gradient {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.05) 100%
    );
    z-index: 2;
  }

  .banner__content {
    position: relative;
    z-index: 3;
    min-height: 33vh;
    width: 100%;
    max-width: 700px;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 1px solid rgba(191, 161, 69, 0.4);
      padding-bottom: 0.2em;
      display: inline-block;
    }

    h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: calc(var(--h5) * 1.1);
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0;
      color: rgba(255,255,255,0.75);
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
    margin-top: 1.5rem;
  }
`
