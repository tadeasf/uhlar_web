import styled from "styled-components"

export const ContactStyles = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gap);
    max-width: 900px;

    @media(min-width:768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  h3 {
    font-family: 'Cinzel', serif;
    letter-spacing: 0.06em;
    border-bottom: 1px solid rgba(191,161,69,0.25);
    padding-bottom: 0.3em;
    display: inline-block;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  input, textarea, select {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(191,161,69,0.25);
    color: #fff;
    padding: 14px 16px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
    width: 100%;

    &::placeholder { color: var(--inActive); }
    &:focus { border-color: var(--primary); }
  }

  textarea { min-height: 120px; resize: vertical; }

  button[type="submit"] {
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 14px 32px;
    font-family: 'Cinzel', serif;
    font-size: 13px;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    align-self: flex-start;

    &:hover {
      background: var(--primary);
      color: #000;
    }
  }
`
