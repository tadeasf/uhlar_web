import styled from "styled-components"

export const FeaturedServicesStyles = styled.section`
  > div {
    &.container__scroll {
      gap: calc(var(--gap)/2);
      padding-bottom: var(--gap);
      padding-left: var(--borderSpacing);
      padding-right: var(--borderSpacing);
      margin-left: calc(var(--borderSpacing)*-1);
      width: calc(100% + var(--borderSpacing)*2);
      @media(min-width:1200px) {
        padding-bottom: 0; width: 100%; margin-left: auto;
        padding-left: 0; padding-right: 0; gap: var(--gap);
      }
    }
  }
`

export const FeaturedServiceStyles = styled.aside`
  min-height: 420px;
  background: #050505;
  overflow: hidden;
  scroll-snap-align: center;
  position: relative;
  border: 1px solid rgba(191,161,69,0.18);
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  box-sizing: border-box;

  flex: 0 0 85%;
  @media(min-width:600px) { flex: 0 0 calc(50% - 10px); min-height: 440px; }
  @media(min-width:1024px) { flex: 0 0 calc(33.333% - 14px); min-height: 520px; }

  .features__item--img {
    position: absolute; inset: 0; z-index: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
    img { object-fit: cover !important; width: 100% !important; height: 100% !important; }
  }

  .features__item--content {
    width: 100%; position: absolute; z-index: 2;
    padding: 24px 20px; bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%);
    @media(min-width:768px) { padding: 28px 24px; }
    @media(min-width:1200px) { padding: 40px 32px; }
    h4 { font-family: 'Cinzel', serif; letter-spacing: 0.05em; color: #fff; text-shadow: var(--textShadow); margin-bottom: 0.5rem; }
    p  { color: var(--bodyColor); text-shadow: var(--textShadow); font-family: 'Cormorant Garamond', serif; font-style: italic; }
  }

  &:hover {
    cursor: pointer;
    border-color: var(--primary);
    box-shadow: 0 0 40px rgba(191,161,69,0.15);
    .features__item--img { transform: scale(1.06); opacity: 0.55; }
  }
`
