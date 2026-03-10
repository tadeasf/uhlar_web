/** @format */

import styled from "styled-components";

export const FooterStyles = styled.footer`
  border-top: 1px solid rgba(191, 161, 69, 0.2);

  &.section {
    padding: 0 var(--borderSpacing) var(--gap) var(--borderSpacing);

    .container {
      display: flex;
      flex-direction: column;
      gap: var(--gap);

      @media (min-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
      }

      @media (min-width: 1200px) {
        gap: calc(var(--gap) * 2);
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li a { transition: color 0.3s ease; }
    }
  }

  .sluzby-link {
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: var(--bodyColor);
      text-decoration: none;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;

      span { color: var(--primary); }
    }

    &:hover, &:focus {
      a { color: var(--primary); }
    }
  }
`;

export const FooterMenuStyles = styled.div`
  @media (min-width: 768px) {
    flex-grow: 1;
    width: 33.333%;
  }

  h5 {
    font-family: 'Cinzel', serif;
    letter-spacing: 0.08em;
    margin-top: 0;
    display: inline-block;
    border-bottom: 1px solid rgba(191, 161, 69, 0.3);
    padding-bottom: 0.2em;

    a { color: #fff; text-decoration: none; }
  }

  ul {
    margin-bottom: var(--gap);

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: var(--bodyColor);
      text-decoration: none;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      font-size: 14px;

      span { color: var(--primary); }
    }

    &:hover, &:focus {
      a { color: var(--primary); }
    }
  }

  &.social__menu {
    margin-bottom: var(--gap);

    ul {
      display: flex;

      @media (min-width: 768px) { flex-direction: row; }

      li {
        font-size: var(--h6);
        margin-right: 8px;

        @media (min-width: 768px) {
          margin-left: 5px;
          margin-right: 5px;
        }

        a { color: var(--primary); }

        &:hover, &:focus {
          a { color: #fff; }
        }
      }
    }
  }
`;

export const CopyrightStyles = styled.div`
  font-size: 12px;
  padding-top: var(--gap);
  letter-spacing: 0.05em;

  p {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;

    a {
      color: #fff;
      font-weight: 600;
      text-decoration: none;

      &:hover, &:focus { color: var(--primary); }
    }

    span { color: var(--primary); }
  }
`;
