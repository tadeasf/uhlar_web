/** @format */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --bannerTitle: 32px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: #0a0a0a;
  --primary: #bfa145;
  --primary-light: #d4b96a;
  --primary-dark: #8a7232;
  --bodyColor: #999;
  --inActive: #444;
  --boxShadow: 0px 20px 40px rgba(0,0,0,0.7);
  --textShadow: 0px 2px 12px rgba(0,0,0,0.9);
  --p: 15px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 36px;
    --h2: 22px; --h3: 21px; --h4: 20px; --h5: 19px; --h6: 18px;
    --sectionMargin: 80px;
  }
  @media(min-width:414px) {
    --bannerTitle: 40px;
    --h2: 27px; --h3: 25px; --h4: 23px; --h5: 21px; --h6: 20px;
  }
  @media(min-width:768px) {
    --bannerTitle: 48px;
    --blockquote: 26px; --p: 16px;
    --h2: 32px; --h3: 28px; --h4: 26px; --h5: 24px; --h6: 22px;
    --sectionMargin: 120px;
  }
  @media(min-width:1024px) {
    --borderSpacing: 75px; --p: 17px;
    --h2: 38px; --h3: 33px; --h4: 29px; --h5: 27px; --h6: 25px;
    --sectionMargin: 160px;
  }
  @media(min-width:1200px) { --p: 18px; }
}

*, *::before, *::after { box-sizing: border-box; scroll-behavior: smooth; }

body {
  font-family: 'Raleway', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  background-color: var(--background);
  color: #fff;
  overflow-x: hidden;
  font-size: var(--p);
}

/* Grain overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 300px 300px;
}

h1, h2, h3, h4 {
  font-family: 'Cinzel', serif;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h5, h6 { margin-top: 0.5rem; margin-bottom: 1rem; }

h1 { font-size: var(--bannerTitle); }
h2 { font-size: var(--h2); }
h3 { font-size: var(--h3); }
h4 { font-size: var(--h4); }
h5 { font-size: var(--h5); }
h6 { font-size: var(--h6); }

p {
  font-family: 'Cormorant Garamond', serif;
  font-size: calc(var(--p) * 1.2);
  line-height: 1.75;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--bodyColor);
}

b, strong { font-weight: 700; }
i { font-style: italic; }

hr {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--primary), transparent);
  opacity: 0.35;
  margin: calc(var(--sectionMargin) / 2) 0;
}

a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover, &:focus { color: var(--primary-light); text-decoration: none; }
}

blockquote {
  font-family: 'Cormorant Garamond', serif;
  font-size: var(--blockquote);
  font-style: italic;
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
  color: var(--bodyColor);
}

ol, ul { margin-top: calc(var(--sectionMargin)/2); margin-bottom: calc(var(--sectionMargin)/2); }

.container {
  margin: 0 auto;
  &__tight { max-width: 1400px; }
  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar { width: 14px; height: 3px; }
    &::-webkit-scrollbar-thumb { background: var(--primary); }
    &::-webkit-scrollbar-track { background: #000; }
    @media(min-width:1200px) { overflow-x: visible; }
  }
}

.section {
  margin-top: var(--sectionMargin);
  margin-bottom: var(--sectionMargin);
  padding: 0 var(--borderSpacing);
  &.section__padding {
    padding-top: var(--sectionMargin);
    padding-bottom: var(--sectionMargin);
  }
}

.intro__area {
  margin-bottom: calc(var(--gap) * 2);
  max-width: 640px;
  h2 {
    display: inline-block;
    border-bottom: 1px solid rgba(191,161,69,0.3);
    padding-bottom: 0.25em;
  }
}

.learn__more { margin-top: calc(var(--gap) * 2); }

.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin: 0 auto;
  max-width: 1400px;
  >* {
    flex: 0 0 100%;
    @media(min-width:414px) { flex-basis: calc(50% - calc(var(--gap)/2)); }
    @media(min-width:1024px) { flex-basis: calc(33.333% - 27px); }
  }
}

.contentimg { margin: var(--gap) 0; }
.contentdescription {
  color: var(--bodyColor);
  font-style: italic;
  font-size: 0.8rem;
  text-align: center;
  margin-top: calc(var(--gap)/2);
}
`;
