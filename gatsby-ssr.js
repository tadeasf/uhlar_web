/** @format */

import React from "react";
import { MenuProvider } from "./src/components/MenuContext";
import { AnimatePresence } from "framer-motion";

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link
      key="google-fonts-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts-preconnect-static"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="google-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;500&display=swap"
    />,
  ]);
}

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}
