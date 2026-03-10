import styled from "styled-components"

export const PageTitleStyles = styled.div`
  padding: 160px var(--borderSpacing) 60px;
  border-bottom: 1px solid rgba(191,161,69,0.15);

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(32px, 6vw, 72px);
    font-weight: 600;
    letter-spacing: 0.06em;
    margin: 0 0 0.4em 0;
    line-height: 1.1;

    span { color: var(--primary); }
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(16px, 2vw, 22px);
    font-style: italic;
    color: var(--bodyColor);
    margin: 0;
    max-width: 600px;
  }
`
