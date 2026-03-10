import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { GlobalStyle } from "../../styles/GlobalStyles"
import {
  LandingPageWrapper,
  LandingTitle,
  CardsRow,
  CardLink,
  CardIcon,
  CardLabel,
  CardSubtitle,
} from "./LandingPageStyles"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const cards = [
  {
    icon: "/icons/1.svg",
    label: "Chci poslouchat.",
    subtitle: "Přednáška na míru.",
    href: "https://prednaska.martinuhlar.cz",
    external: true,
  },
  {
    icon: "/icons/2.svg",
    label: "Chci se učit.",
    subtitle: "Osobní přístup.",
    href: "https://seminar.martinuhlar.cz",
    external: true,
  },
  {
    icon: "/icons/3.svg",
    label: "Chci výsledky.",
    subtitle: "Historie bez práce.",
    href: "/sluzby",
    external: false,
  },
  {
    icon: "/icons/4.svg",
    label: "Rozhlížím se.",
    subtitle: "Teprve se rozhodnu.",
    href: "/domov",
    external: false,
  },
]

const LandingPage = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPageWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
        >
          <motion.div variants={itemVariants}>
            <LandingTitle>
              <h1>Martin Uhlář</h1>
              <p>Genealog &amp; rodopisec</p>
            </LandingTitle>
          </motion.div>

          <CardsRow>
            {cards.map((card, index) => {
              const content = (
                <>
                  <CardIcon>
                    <img src={card.icon} alt="" />
                  </CardIcon>
                  <CardLabel>{card.label}</CardLabel>
                  <CardSubtitle>{card.subtitle}</CardSubtitle>
                </>
              )
              return (
                <motion.div key={index} variants={itemVariants}>
                  {card.external ? (
                    <CardLink as="a" href={card.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </CardLink>
                  ) : (
                    <CardLink as={Link} to={card.href}>
                      {content}
                    </CardLink>
                  )}
                </motion.div>
              )
            })}
          </CardsRow>
        </motion.div>
      </LandingPageWrapper>
    </>
  )
}

export default LandingPage
