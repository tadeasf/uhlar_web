import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  @media(min-width:1200px) { gap: var(--gap); }
`

export const PostItemStyles = styled(Link)`
  flex: 0 0 100%;
  border: 1px solid rgba(191,161,69,0.18);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  transition: border-color 0.4s ease, background 0.4s ease, transform 0.3s ease;
  position: relative;
  background: rgba(255,255,255,0.015);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  &::before { top: 6px; left: 6px; border-top: 1px solid var(--primary); border-left: 1px solid var(--primary); }
  &::after { bottom: 6px; right: 6px; border-bottom: 1px solid var(--primary); border-right: 1px solid var(--primary); }

  @media(min-width:768px) { flex-basis: calc(50% - 10px); }
  @media(min-width:1024px) { flex-basis: calc(33.333% - 14px); padding: 36px 28px; }
  @media(min-width:1200px) { flex-basis: calc(33.333% - 27px); padding: 44px 32px; }

  h4 {
    font-family: 'Cinzel', serif;
    letter-spacing: 0.05em;
    font-size: var(--h5);
    color: #fff;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: calc(var(--p) * 1.05);
    color: var(--bodyColor);
    margin-bottom: auto;
    flex: 1;
  }

  .blogitem__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(191,161,69,0.15);

    p {
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--primary);
      margin: 0;
      flex: none;
    }
  }

  &:hover {
    color: #fff;
    border-color: rgba(191,161,69,0.45);
    background: rgba(191,161,69,0.035);
    transform: translateY(-3px);
    &::before, &::after { opacity: 1; }
  }
`

export const PostSingleStyles = styled.article`
  padding: var(--sectionMargin) var(--borderSpacing) 0;
  max-width: 750px;
  margin: 0 auto;
  box-sizing: content-box;

  .blogsingle {
    &__title {
      font-family: 'Cinzel', serif;
      font-size: var(--h2);
      font-weight: 600;
      letter-spacing: 0.05em;
      border-bottom: 1px solid rgba(191,161,69,0.25);
      padding-bottom: 0.4em;
      margin-bottom: 0.5em;
    }
    &__date {
      font-family: 'Raleway', sans-serif;
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--primary);
      margin-bottom: 2rem;
      display: block;
    }
    &__content {
      padding-top: var(--gap);
      p { font-family: 'Cormorant Garamond', serif; font-size: calc(var(--p)*1.2); line-height: 1.8; }
    }
    &__back { padding-top: var(--gap); }
  }
`
