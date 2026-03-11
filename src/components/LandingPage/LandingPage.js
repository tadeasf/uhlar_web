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
  RodSection,
  RodOrnament,
  RodTitle,
  RodSub,
  RodMapLink,
  FooterNote,
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
  {
    icon: "/icons/5.svg",
    label: "Chci kreslit.",
    subtitle: "Vývod z předků.",
    href: "https://platno.martinuhlar.cz",
    external: true,
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

          <motion.div variants={itemVariants}>
            <RodSection>
              <RodOrnament aria-hidden="true">
                <span>✦</span>
                <span className="line" />
                <span>✦</span>
              </RodOrnament>
              <RodTitle>Moje rodina</RodTitle>
              <RodSub>5 000 předků · 203 míst · 5 století</RodSub>
              <RodMapLink
                href="/rod"
                aria-label="Otevřít interaktivní mapu rodů"
              >
                Prozkoumat mapu rodů
              </RodMapLink>
            </RodSection>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FooterNote>
              <span className="divider">✦</span>
              <p>
                Stránky jsou prozatím v přípravě — postupně přibývají nové sekce a funkce.
                Neváhejte mě mezitím <a href="/contact">kontaktovat</a> přímo.
              </p>
              <p>
                <a href="/zasady-ochrany-osobnich-udaju.pdf" target="_blank" rel="noopener noreferrer">
                  Zásady ochrany osobních údajů
                </a>
                {" · "}
                <a href="/vseobecne-obchodni-podminky.pdf" target="_blank" rel="noopener noreferrer">
                  Všeobecné obchodní podmínky
                </a>
              </p>
            </FooterNote>
          </motion.div>
        </motion.div>
      </LandingPageWrapper>
    </>
  )
}

export default LandingPage
