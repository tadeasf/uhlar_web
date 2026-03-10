import styled from "styled-components"

export const FaqStyles = styled.section`
  margin-bottom: calc(var(--gap)/2);

  .question {
    min-height: calc(var(--gap)*2);
    width: 100%;
    background: transparent;
    border: 1px solid rgba(191,161,69,0.2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-family: 'Cinzel', serif;
    font-size: calc(var(--p)*0.95);
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: border-color 0.3s ease, background 0.3s ease;

    &:hover {
      border-color: var(--primary);
      background: rgba(191,161,69,0.03);
    }

    .trigger {
      display: inline-flex;
      height: 40px; width: 50px;
      position: relative;
      font-size: 32px;
      justify-content: center;
      align-items: center;
      color: var(--primary);
      transition: transform 0.5s ease;
    }
  }

  .answer {
    padding: calc(var(--gap)/2);
    font-family: 'Cormorant Garamond', serif;
    font-size: calc(var(--p)*1.1);
    line-height: 1.75;
    color: var(--bodyColor);
    border-left: 1px solid rgba(191,161,69,0.2);
    border-right: 1px solid rgba(191,161,69,0.2);
    border-bottom: 1px solid rgba(191,161,69,0.2);
  }

  &.faq-open .trigger { transform: rotate(-180deg); }
`
