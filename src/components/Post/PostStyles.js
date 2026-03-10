import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: calc(var(--gap) / 2);

  @media (min-width: 1200px) {
    gap: var(--gap);
  }
`

export const PostItemStyles = styled(Link)`
  flex: 0 0 100%;
  border: 1px solid rgba(191, 161, 69, 0.2);
  border-radius: 2px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  transition: border-color 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  background-color: rgba(255,255,255,0.02);

  /* Rohové ornamentální linky */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::before {
    top: 6px;
    left: 6px;
    border-top: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
  }

  &::after {
    bottom: 6px;
    right: 6px;
    border-bottom: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
  }

  &:first-child { margin-top: 0; }

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1024px) {
    flex-basis: calc(33.333% - 27px);
    padding-top: 36px;
    padding-bottom: 36px;
  }

  @media (min-width: 1200px) {
    width: calc(33.333% - 54px);
    padding: 44px 30px;
  }

  h4 {
    margin-top: 0;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.05em;
    font-size: var(--h5);
    color: #fff;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: calc(var(--p) * 1.05);
    color: var(--bodyColor);
  }

  > p { margin-bottom: var(--gap); }

  a {
    text-decoration: none;
    color: #fff;
  }

  .blogitem__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--gap) / 2);
    margin-top: auto;

    p {
      color: var(--primary);
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-style: normal;
    }

    > * {
      &:first-child { margin-top: 0; }
      &:last-child { margin-bottom: 0; }
    }
  }

  &:hover {
    color: #fff;
    border-color: rgba(191, 161, 69, 0.5);
    background-color: rgba(191, 161, 69, 0.04);
    box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(191, 161, 69, 0.1);

    &::before,
    &::after {
      opacity: 1;
    }
  }
`

export const PostSingleStyles = styled.article`
  padding: var(--sectionMargin) var(--borderSpacing) 0 var(--borderSpacing);
  max-width: 750px;
  margin: 0 auto;
  box-sizing: content-box;

  .blogsingle {
    &__title {
      font-family: 'Cinzel', serif;
      font-size: var(--h2);
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    &__date {
      font-family: 'Raleway', sans-serif;
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--primary);
    }

    &__content {
      border-top: 1px solid rgba(191, 161, 69, 0.3);
      padding-top: calc(var(--gap));

      p {
        font-family: 'Cormorant Garamond', serif;
        font-size: calc(var(--p) * 1.2);
        line-height: 1.8;
      }
    }

    &__back {
      padding-top: var(--gap);
    }
  }
`
