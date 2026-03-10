/** @format */

import React from "react";
import { MenuProvider } from "./src/components/MenuContext";
import { AnimatePresence } from "framer-motion";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";

// Google Fonts — načteny přes <link> v gatsby-ssr.js
//
export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}
