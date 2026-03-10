/** @format */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {  
  --bannerTitle: 34px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: #0a0a0a;
  --primary: #bfa145;
  --primary-light: #d4b96a;
  --bodyColor: #b0b0b0;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);
  --textShadow: 0px 0px 8px rgba(0, 0, 0, 1);
  --p: 14px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 36px;    
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }

  @media(min-width:414px) {
    --bannerTitle: 40px;    
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }

  @media(min-width:768px) {
    --bannerTitle: 46px;    
    --blockquote: 26px;
    --p: 15px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 16px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 180px;
  }

  @media(min-width:1200px) {
    --p: 17px;
  }
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  

body {
  font-family: 'Raleway', 'Avenir', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background);
  color: #fff;
  overflow-x: hidden;
  font-size: var(--p);
}

h1,
h2 {
    font-family: 'Cinzel', serif;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 600;
    letter-spacing: 0.05em;

    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}

h3,
h4 {
  font-family: 'Cinzel', serif;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.03em;
}

h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h1 { font-size: var(--bannerTitle); }
h2 { font-size: var(--h2); }
h3 { font-size: var(--h3); }
h4 { font-size: var(--h4); }
h5 { font-size: var(--h5); }
h6 { font-size: var(--h6); }

p {
    font-family: 'Cormorant Garamond', 'Times New Roman', serif;
    font-size: calc(var(--p) * 1.15);
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--bodyColor);
    line-height: 1.7;
}

b, strong { font-weight: 700; }
i { font-style: italic; }

.underline {
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: rgba(175, 194, 203, 0.25);
  text-decoration-thickness: 0.125rem;
}

hr,
ol,
ul,
blockquote {
  margin-top: calc(var(--sectionMargin) / 2);
  margin-bottom: calc(var(--sectionMargin) / 2);
}

hr {
  border: none; 
  height: 1px;
  background: linear-gradient(to right, transparent, var(--primary), transparent);
  opacity: 0.4;
}

a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover, &:focus {
    color: var(--primary-light);
    text-decoration: none;
  }
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

.container {
  margin-left: auto;
  margin-right: auto;

  &__tight { max-width: 1400px; }

  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar { width: 14px; height: 4px; }
    &::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 0px; }
    &::-webkit-scrollbar-thumb:hover { background: var(--primary-light); }
    &::-webkit-scrollbar-track { background: #000; border-radius: 0px; }

    @media (min-width: 1200px) { overflow-x: visible; }
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
  max-width: 700px;

  h2 {
    display: inline-block;
    border-bottom: 1px solid rgba(191, 161, 69, 0.3);
    padding-bottom: 0.3em;
  }
}

.learn__more { margin-top: calc(var(--gap) * 2); }

.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;

  >* {
    flex: 0 0 100%;

    @media(min-width:414px) {
      flex-basis: calc(50% - (calc(var(--gap) / 2)));
    }

    @media(min-width:1024px) {
      flex-basis: calc(33.333% - 27px);
    }
  }
}

.contentimg { margin-top: var(--gap); margin-bottom: var(--gap); }

.contentdescription {
  color: var(--bodyColor);
  font-style: italic;
  font-size: 0.813rem;
  text-align: center;
  margin-top: calc(var(--gap) / 2);
}
`;
