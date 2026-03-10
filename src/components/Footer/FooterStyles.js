import styled from "styled-components"

export const FooterStyles = styled.footer`
  border-top: 1px solid rgba(191,161,69,0.2);

  &.section {
    padding: 0 var(--borderSpacing) var(--gap);

    .container {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
      @media(min-width:768px) { align-items: flex-start; flex-direction: row; }
      @media(min-width:1200px) { gap: calc(var(--gap)*2); }
    }

    ul { list-style: none; padding: 0; margin: 0; }
  }

  .sluzby-link {
    margin: 5px 0;
    a {
      color: var(--bodyColor); text-decoration: none;
      font-family: 'Raleway', sans-serif; font-weight: 400; font-size: 14px;
      span { color: var(--primary); }
    }
    &:hover a { color: var(--primary); }
  }
`

export const FooterMenuStyles = styled.div`
  @media(min-width:768px) { flex-grow: 1; width: 33.333%; }

  h5 {
    font-family: 'Cinzel', serif;
    letter-spacing: 0.08em;
    margin-top: 0;
    display: inline-block;
    border-bottom: 1px solid rgba(191,161,69,0.3);
    padding-bottom: 0.2em;
    a { color: #fff; text-decoration: none; }
  }

  ul {
    margin-bottom: var(--gap);
    @media(min-width:768px) { display: flex; flex-direction: column; }
  }

  li {
    margin: 5px 0;
    a {
      color: var(--bodyColor); text-decoration: none;
      font-family: 'Raleway', sans-serif; font-size: 14px;
      span { color: var(--primary); }
    }
    &:hover a { color: var(--primary); }
  }

  &.social__menu {
    margin-bottom: var(--gap);
    ul {
      display: flex;
      @media(min-width:768px) { flex-direction: row; }
      li {
        font-size: var(--h6); margin-right: 8px;
        a { color: var(--primary); }
        &:hover a { color: #fff; }
      }
    }
  }
`

export const CopyrightStyles = styled.div`
  font-size: 12px;
  padding-top: var(--gap);
  p {
    margin: 0; font-family: 'Raleway', sans-serif; font-size: 12px; letter-spacing: 0.04em;
    a { color: #fff; font-weight: 600; text-decoration: none; &:hover { color: var(--primary); } }
    span { color: var(--primary); }
  }
`
