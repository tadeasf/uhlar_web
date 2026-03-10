import styled from "styled-components"

export const ButtonStyles = styled.button`
  color: #fff;
  background: transparent;
  font-family: 'Raleway', sans-serif;
  border: 0;
  text-decoration: none;
  padding: 0 0 14px 0;
  transition: color 0.3s ease;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    left: 0; right: 0; bottom: 6px;
    background: var(--primary);
    transition: left 0.35s ease;
  }

  &:focus { color: var(--primary); }

  @media(hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--primary);
      &::after { left: 100%; }
    }
  }
`
