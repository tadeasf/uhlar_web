/** @format */
import styled from "styled-components"
import { motion } from "framer-motion"

export const NavModuleStyles = styled.nav`
  .nav {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 100;
    padding: 24px var(--borderSpacing) 0;
    @media(min-width:1024px) { padding-top: 44px; }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .menu {
    background: #060606;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth)*-1));
    height: 100%;
    top: 0; bottom: 0; left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(191,161,69,0.12);
  }
`

export const NavTopLevel = styled.ul`
  list-style: none;
  padding: 0; margin: 0;

  > li, > li > button {
    font-family: 'Cinzel', serif;
    font-size: var(--h2);
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: color 0.3s ease;
    a { text-decoration: none; color: #fff; }
    span { color: var(--primary); }
    &:hover { color: var(--primary); > a { color: var(--primary); } }
  }

  > li > button {
    background: transparent; padding: 0; color: #fff;
    border: none; font-family: 'Cinzel', serif;
    display: flex; align-items: center;
  }

  > li > button > svg {
    font-size: 22px; margin-left: 6px; color: var(--primary);
    transition: transform 0.3s ease;
    @media(min-width:768px) { font-size: 26px; }
    @media(min-width:1024px) { font-size: 30px; }
  }

  > li.open > button > svg { transform: rotate(180deg); }
`

export const SubNavStyles = styled(motion.ul)`
  padding-left: calc(var(--gap)/2);
  list-style: none; margin: 0;

  > li {
    font-family: 'Raleway', sans-serif;
    font-size: var(--h4); font-weight: 400;
    &:hover > a { color: var(--primary); }
  }

  @media(min-width:1024px) { padding-left: var(--gap); }
  hr { margin: 10px 0; }
`

export const HamburgerStyles = styled(motion.button)`
  background: transparent; border: none;
  width: 30px; height: 30px; padding: 0;
  cursor: pointer; outline: none;
  &:focus { border: none; outline: none; }

  .bar {
    display: block; background: #fff;
    height: 2px; border-radius: 1px;
    &:nth-of-type(2) { margin: 8px 0; background: var(--primary); }
  }
`

export const LogoStyles = styled.div`
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.08em;
  a { color: #fff; text-decoration: none; transition: color 0.3s ease; }
  span { color: var(--primary); }
  @media(min-width:1024px) { font-size: 21px; }
  &:hover a { color: var(--primary); }
`
