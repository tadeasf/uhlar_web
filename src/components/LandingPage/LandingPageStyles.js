import styled from "styled-components"

export const LandingPageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  background-image: url("/logos/MartinLogo_Transparent_Green.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 160% auto;
  padding: 24px 16px;
  position: relative;
  overflow-y: auto;

  @media (min-width: 768px) {
    background-size: auto 92vh;
    padding: 40px 20px;
  }
`

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  max-width: 360px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, auto);
    gap: 32px 48px;
    max-width: none;
    justify-content: center;
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
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
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

  @media (min-width: 600px) {
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
  }

  @media (min-width: 1024px) {
    width: 115px;
    height: 115px;
    margin-bottom: 14px;
  }
`

export const CardLabel = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  @media (min-width: 600px) {
    font-size: var(--h4);
  }

  @media (min-width: 1024px) {
    font-size: var(--h2);
  }
`

export const CardSubtitle = styled.span`
  font-size: 12px;
  color: var(--bodyColor);
  font-style: italic;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);

  @media (min-width: 600px) {
    font-size: var(--h6);
  }

  @media (min-width: 1024px) {
    font-size: var(--h4);
  }
`
