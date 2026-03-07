import styled from "styled-components"

export const LandingPageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  background-image: url("/logos/MartinLogo_Transparent_Green.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  padding: 40px 20px;
  position: relative;

  @media (min-width: 768px) {
    background-size: auto 92vh;
  }
`

export const SectionHeading = styled.h2`
  font-size: var(--bannerTitle);
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: 0 0 36px 0;
  letter-spacing: var(--letterSpacing);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);

  span {
    color: var(--primary);
  }
`

export const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px 48px;
  }

  @media (min-width: 1024px) {
    gap: 32px 64px;
  }
`

export const CardLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`

export const CardIcon = styled.div`
  width: 115px;
  height: 115px;
  margin-bottom: 14px;
  transition: filter 0.3s ease;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  ${CardLink}:hover & {
    filter: brightness(0) saturate(100%) invert(100%)
      drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));
  }
`

export const CardLabel = styled.span`
  font-size: var(--h2);
  color: #fff;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
`

export const CardSubtitle = styled.span`
  font-size: var(--h4);
  color: var(--bodyColor);
  font-style: italic;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
`
