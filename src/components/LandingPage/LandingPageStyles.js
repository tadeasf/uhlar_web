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
  padding: 24px 16px;
  position: relative;
  overflow: hidden;

  /* Velké logo na pozadí */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("/logos/MartinLogo_Transparent_Green.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 120% auto;
    opacity: 0.06;
    pointer-events: none;
    @media(min-width:768px) {
      background-size: auto 80vh;
      opacity: 0.07;
    }
  }

  /* Rohové ornamentální linky */
  &::after {
    content: '';
    position: absolute;
    inset: 20px;
    pointer-events: none;
    border: 1px solid rgba(191,161,69,0.12);
  }
`

export const LandingTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(32px, 5.5vw, 62px);
    font-weight: 600;
    letter-spacing: 0.08em;
    margin: 0 0 0.3em 0;
    color: #fff;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(18px, 2.2vw, 23px);
    font-style: italic;
    color: var(--bodyColor);
    margin: 0;
  }

  /* zlatá linka pod nadpisem */
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: var(--primary);
    margin: 1.2em auto 0;
    opacity: 0.7;
  }
`

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 1;

  @media(min-width:600px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 22px;
    max-width: 1060px;
  }

  @media(min-width:1024px) {
    gap: 36px;
    max-width: 1280px;
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
  padding: 32px 22px 28px;
  border: 1px solid rgba(191,161,69,0.15);
  background: rgba(255,255,255,0.02);
  transition: border-color 0.4s ease, background 0.4s ease, transform 0.4s ease;
  position: relative;

  /* rohové ozdoby */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  &::before {
    top: 5px; left: 5px;
    border-top: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
  }
  &::after {
    bottom: 5px; right: 5px;
    border-bottom: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
  }

  &:hover {
    border-color: rgba(191,161,69,0.5);
    background: rgba(191,161,69,0.04);
    transform: translateY(-4px);
    &::before, &::after { opacity: 1; }
  }

  @media(min-width:768px) {
    padding: 42px 32px 36px;
  }
`

export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  margin-bottom: 14px;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.6)) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9);
  transition: filter 0.4s ease;

  img { width: 100%; height: 100%; object-fit: contain; display: block; }

  ${CardLink}:hover & {
    filter: drop-shadow(0 2px 8px rgba(191,161,69,0.4)) sepia(1) saturate(3) hue-rotate(5deg) brightness(1.1);
  }

  @media(min-width:600px) { width: 72px; height: 72px; margin-bottom: 20px; }
  @media(min-width:1024px) { width: 88px; height: 88px; }
`

export const CardLabel = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #fff;
  display: block;
  margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  line-height: 1.3;

  @media(min-width:600px) { font-size: 16px; }
  @media(min-width:1024px) { font-size: 20px; }
`

export const CardSubtitle = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  font-style: italic;
  color: var(--primary);
  text-shadow: 0 1px 6px rgba(0,0,0,0.8);

  @media(min-width:600px) { font-size: 15px; }
  @media(min-width:1024px) { font-size: 18px; }
`
