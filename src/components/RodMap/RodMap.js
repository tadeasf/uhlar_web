import React, { useEffect, useRef, useState } from "react"
import { GlobalStyle } from "../../styles/GlobalStyles"
import styled from "styled-components"

/* ─── styled ──────────────────────────────────────────── */

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  color: #e8e2d4;
  &::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9990;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 300px;
  }
`

const Header = styled.header`
  position: relative; z-index: 600; height: 54px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 1.8rem;
  background: rgba(10,10,10,0.97);
  border-bottom: 1px solid rgba(191,161,69,0.28);
`
const HBrand = styled.a`
  font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 600;
  letter-spacing: 0.12em; color: #e8e2d4; text-decoration: none;
  em { color: #bfa145; font-style: normal; }
`
const HSub = styled.span`
  font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: #7a7060;
`
const HStats = styled.div`display: flex; gap: 1.4rem; align-items: center;`
const HStat = styled.div`text-align: center;`
const HStatNum = styled.div`font-family: 'Cinzel', serif; font-size: 1.1rem; color: #bfa145; line-height: 1;`
const HStatLbl = styled.div`font-size: 0.52rem; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7060; margin-top: 1px;`
const HSep = styled.div`width: 1px; height: 28px; background: rgba(191,161,69,0.28);`
const HBack = styled.a`
  font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: #7a7060; text-decoration: none; transition: color 0.3s;
  &:hover { color: #bfa145; }
`

const Body = styled.div`flex: 1; display: flex; overflow: hidden;`

const MapContainer = styled.div`
  flex: 1; position: relative; z-index: 1;
  .leaflet-tile-pane { filter: invert(1) hue-rotate(180deg) brightness(0.85) saturate(0.5); }
  .leaflet-container { background: #0d0d0d !important; }
  .leaflet-popup-content-wrapper {
    background: #101010 !important; border: 1px solid rgba(191,161,69,0.28) !important;
    border-radius: 0 !important; box-shadow: 0 4px 24px rgba(0,0,0,0.6) !important; color: #e8e2d4;
  }
  .leaflet-popup-tip { background: #101010 !important; }
  .leaflet-popup-close-button { color: #7a7060 !important; }
  .popup-name { font-family: 'Cinzel', serif; font-size: 0.85rem; letter-spacing: 0.06em; }
  .popup-count { font-size: 0.7rem; color: #bfa145; margin-top: 3px; font-family: 'Cormorant Garamond', serif; font-style: italic; }
  .popup-hint { font-size: 0.55rem; letter-spacing: 0.12em; text-transform: uppercase; color: #7a7060; margin-top: 5px; }
`

const Sidebar = styled.div`
  width: 340px; flex-shrink: 0;
  background: #101010; border-left: 1px solid rgba(191,161,69,0.28);
  overflow-y: auto; z-index: 2;
  scrollbar-width: thin; scrollbar-color: rgba(191,161,69,0.2) transparent;
  @media (max-width: 768px) { display: none; }
`
const SbEmpty = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; padding: 2.5rem; text-align: center; color: #7a7060;
  p { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.05rem; line-height: 1.7; margin: 0; }
  .orn { font-size: 2rem; color: #bfa145; opacity: 0.3; margin-bottom: 1.2rem; }
`
const SbContent = styled.div`padding: 1.8rem;`
const SbRegion = styled.div`font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase; color: #bfa145; margin-bottom: 0.6rem;`
const SbName = styled.h2`font-family: 'Cinzel', serif; font-size: 1.3rem; font-weight: 600; letter-spacing: 0.04em; color: #e8e2d4; margin: 0 0 0.3rem 0; line-height: 1.2;`
const SbYears = styled.div`font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: #7a7060; font-style: italic; margin-bottom: 1.2rem;`
const SbBadge = styled.div`display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(191,161,69,0.1); border: 1px solid rgba(191,161,69,0.25); padding: 4px 10px; margin-bottom: 1rem;`
const SbBadgeNum = styled.span`font-family: 'Cinzel', serif; font-size: 1.3rem; color: #bfa145; line-height: 1;`
const SbBadgeLbl = styled.span`font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: #7a7060;`
const SbDivider = styled.div`height: 1px; background: linear-gradient(to right, rgba(191,161,69,0.28), transparent); margin: 1.2rem 0;`
const SbLabel = styled.div`font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase; color: #bfa145; margin-bottom: 0.6rem;`
const SbSurnameRow = styled.div`display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem;`
const SbSurname = styled.span`font-family: 'Cormorant Garamond', serif; font-size: 0.85rem; font-style: italic; background: rgba(191,161,69,0.08); border: 1px solid rgba(191,161,69,0.2); padding: 2px 8px; color: #e8e2d4;`
const SbPeople = styled.div`display: flex; flex-direction: column; gap: 0.3rem;`
const SbPerson = styled.div`
  font-size: 0.82rem; color: #7a7060; display: flex; gap: 0.5rem; align-items: flex-start; line-height: 1.4;
  &::before { content: '—'; color: #bfa145; flex-shrink: 0; font-size: 0.7rem; margin-top: 2px; }
`
const SbMore = styled.div`font-size: 0.75rem; color: #7a7060; font-style: italic; margin-top: 0.4rem; padding-left: 1rem;`

const Timeline = styled.div`
  height: 118px; flex-shrink: 0; z-index: 10;
  background: rgba(10,10,10,0.98); border-top: 1px solid rgba(191,161,69,0.28);
  padding: 1rem 1.8rem 0.8rem; display: flex; flex-direction: column; gap: 0.6rem;
`
const TlTop = styled.div`display: flex; align-items: baseline; justify-content: space-between;`
const TlYear = styled.div`font-family: 'Cinzel', serif; font-size: 1.7rem; color: #bfa145; letter-spacing: 0.04em; line-height: 1;`
const TlInfo = styled.div`font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; color: #7a7060; span { color: #bfa145; }`
const TlSlider = styled.input`
  -webkit-appearance: none; appearance: none; width: 100%; height: 1px;
  background: rgba(191,161,69,0.28); outline: none; cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; width: 14px; height: 14px; background: #bfa145;
    border-radius: 50%; border: 2px solid #0a0a0a;
    box-shadow: 0 0 0 1px #bfa145, 0 0 8px rgba(191,161,69,0.4);
    cursor: pointer; transition: transform 0.15s;
  }
  &::-webkit-slider-thumb:hover { transform: scale(1.4); }
`
const TlTicks = styled.div`display: flex; justify-content: space-between; padding: 0 7px;`
const TlTick = styled.span`
  font-size: 0.52rem; letter-spacing: 0.06em; color: ${p => p.$active ? '#d4b96a' : '#7a7060'};
  cursor: pointer; transition: color 0.2s;
  &::before { content: '|'; display: block; text-align: center; margin-bottom: 1px; opacity: 0.3; font-size: 0.55rem; }
  &:hover { color: #bfa145; }
`

/* ─── data ────────────────────────────────────────────── */

const MILESTONES = [1525, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2024]

const PLACES = [{"id":"ždánice","name":"Ždánice","lat":50.058,"lng":14.896,"count":20,"surnames":["Dvořáková","Holub","Holubová","Kulhavá","Kulhavý","Nehasil"],"min_year":1654,"max_year":1867,"region":"Kolínsko","people":["Anna Holubová","Anna Nehasilová","Anna Staňková","Dorota Vaněčková","Jakub Kulhavý","Jan Kulhavý","Jan Nehasil","Jiří Kulhavý","Josef Pohořelý","Josef Staněk","Ján Šedina","Kateřina Kulhavá","Kateřina Vosecká","Magdalena Dvořáková","Matěj Holub","Matěj Vaněček","Matěj Vosecký","Tomáš Vosecký","Václav Kulhavý"]},{"id":"staré_práchňany","name":"Staré Práchňany","lat":49.698,"lng":14.908,"count":12,"surnames":["Kletečka","Kletečková","Mička","Mičková","Zemanová"],"min_year":1756,"max_year":1876,"region":"Střední Čechy","people":["Antonín Kletečka","Barbora Kletečková","Bartoloměj Kletečka","František Kletečka","František Mička","Františka Mičková","Jan Kletečka","Josef Kletečka","Marie Magdalena Zemanová","Václav Kletečka","Čeněk Kletečka"]},{"id":"oleška","name":"Oleška","lat":49.927,"lng":14.776,"count":12,"surnames":["Burdová","Hlaváčková","Kopecká","Kopecký","Kulhavá"],"min_year":1766,"max_year":1925,"region":"Střední Čechy","people":["Alžběta Hlaváčková","Anežka Kopecká","Anna Nehasilová","Barbora Šedina","Josef Pohořelý","Kateřina Burdová","Kateřina Kulhavá","Marie Vosecká","Martin Šedina","Stanislav František Pohořelý","Tomáš Vosecký","Václav Kopecký"]},{"id":"telce","name":"Telce","lat":50.278,"lng":13.952,"count":12,"surnames":["Hora","Horová","Lev","Levová","Reifová","Sadílková"],"min_year":1667,"max_year":1798,"region":"Slánsko","people":["Alžběta Sadílková","Anna Horová","Anna Levová","Jan Hora","Jan Římovský","Joseph Hora","Karel Lev","Kateřina Římovská","Ludmila Reifová","Martin Adam Hora","Mikuláš Římovský","Rosaria"]},{"id":"hukvaldy","name":"Hukvaldy","lat":49.624,"lng":18.189,"count":12,"surnames":["Boháč","Kolaita","Rek","Sobotík","Uhlář"],"min_year":1670,"max_year":1843,"region":"Slezsko","people":["Anna Kolaita","Anna Rosaria Sobotík","Eduard Uhlář","Fabianus Sobotík","Francisca Rek","Georgius Uhlarz","Johann Thomas Uhlář","Johanna Boháč","Josefus Blasius Andreas Uhlarz","Jozef Johann Uhlář","Václav Boháč"]},{"id":"bohouňovice_ii","name":"Bohouňovice II","lat":50.012,"lng":14.945,"count":11,"surnames":["Koželský","Kubelka","Kubelková","Novotná"],"min_year":1599,"max_year":1763,"region":"Kolínsko","people":["Alžběta Kubelková","Dorota Pitáková","Jan Čaubal","Ludmila Novotná","Magdalena Kubelková","Magdalena Čaubalová","Matěj Kubelka","Pavel Kubelka","Tomáš Koželský","Václav Kubelka zvaný Hurt"]},{"id":"uhřičice","name":"Uhřičice","lat":49.349,"lng":17.351,"count":11,"surnames":["Dusíková","Hapal","Hapalová","Roubal","Roubalová"],"min_year":1741,"max_year":1889,"region":"Střední Morava","people":["Božena Vránová","František Vrána","Františka Župková","Ignác Roubal","Jan Vrána","Lucie Urbánková","Mariana Roubalová","Martin Hapal","Martin Roubal","Martina Dusíková","Terezie Hapalová"]},{"id":"rychvald","name":"Rychvald","lat":49.848,"lng":18.366,"count":11,"surnames":["Bajboková","Dostál","Hanusek","Pardubicki","Pardubický"],"min_year":1751,"max_year":1888,"region":"Slezsko","people":["Adelheid Tkaczyk","Agnes Dostál","Barbora Bajboková","František Pardubický","Františka Rygielová","Josef Pardubicki","Josef Tkaczyk","Leopold Pardubický","Marianna Hanusek","Ondřej Žebrák","Veronika Žebráková"]},{"id":"vlkančice","name":"Vlkančice","lat":49.857,"lng":14.761,"count":10,"surnames":["Drož","Drožová","Novák","Pohořelý","Švanda"],"min_year":1722,"max_year":1825,"region":"Střední Čechy","people":["Antonín Novák","Antonín Pohořelý","Barbora Drožová","Jan Pohořelý","Josef Novák","Josef Švanda","Ludmila Vokaunová","Václav Drož"]},{"id":"peruc","name":"Peruc","lat":50.324,"lng":13.988,"count":10,"surnames":["Kučera","Kučerová","Zázvorka","Zázvorková","Římovský"],"min_year":1645,"max_year":1769,"region":"Slánsko","people":["Anna Zázvorková","Jiřík Zázvorka","Jiřík Římovský","Josef Zázvorka","Kateřina Kučerová","Kateřina Čápová","Kašpar Kučera","Marie Zázvorková","Mikuláš Římovský","Tomáš Zázvorka"]},{"id":"přestavlky","name":"Přestavlky","lat":50.089,"lng":14.912,"count":9,"surnames":["Koželský","Kubelka","Mikule","Šifalda"],"min_year":1599,"max_year":1783,"region":"Kolínsko","people":["Jakub Šifalda","Kateřina Mikule","Kateřina Šifalda","Matěj Kubelka","Matěj Šifalda","Tomáš Koželský","Václav Kubelka zvaný Hurt","Václav Mikule"]},{"id":"moravská_ostrava","name":"Moravská Ostrava","lat":49.8356,"lng":18.2921,"count":9,"surnames":["Gold","Gärtner","Pardubicki","Uhlář","Volný"],"min_year":1755,"max_year":1912,"region":"Slezsko","people":["Anna Gärtner","Bedřich Eduard Uhlář","Marie Gold","Matouš Wolný","Michael Gärtner","Milada Anežka Pardubicki","Petr Johann Gold","Petronilla Volný","Rosina Poledníková"]},{"id":"pravětice","name":"Pravětice","lat":49.663,"lng":14.887,"count":8,"surnames":["Beneš","Javorský","Vondrušková"],"min_year":1775,"max_year":1937,"region":"Střední Čechy","people":["Barbora Merksbauerová","Eleonora Vondrušková","Josef Beneš","Josef Javorský","Josef Václav Javorský","Marie Halaška","Marie Magdalena Benešová","Václav Javorský"]},{"id":"rodná","name":"Rodná","lat":49.607,"lng":14.853,"count":8,"surnames":["Král","Macháčková","Stejskal","Stejskalová"],"min_year":1721,"max_year":1853,"region":"Střední Čechy","people":["Anna Macháčková","Josef Král","Karel Král","Marie Anna Stejskalová","Matouš Král","Matěj Král","Petronilla Vandrovcová","Václav Stejskal"]},{"id":"radlice","name":"Radlice","lat":50.045,"lng":14.956,"count":8,"surnames":["Bílek","Jírovská","Jírovský","Šedina","Šmejkal"],"min_year":1702,"max_year":1805,"region":"Kolínsko","people":["Dorota Kubelková","Ján Šedina","Marie Jírovská","Marie Magdalena Šmejkal","Martin Jírovský","Pawel Jírovský","Václav Jírovský","Vít Bílek"]},{"id":"polepy","name":"Polepy","lat":50.461,"lng":14.134,"count":8,"surnames":["Anger","Macková","Satran","Švachta"],"min_year":1616,"max_year":1779,"region":"Litoměřicko","people":["Anna Švachtová","Karel Anger","Kateřina Macková","Pavel Švachta","Tomáš Nikodým Satran","Wincenz Anger"]},{"id":"hruška","name":"Hruška","lat":49.384,"lng":17.19,"count":8,"surnames":["Kahajová","Vrána","Župka"],"min_year":1625,"max_year":1781,"region":"Střední Morava","people":["Dorota Kahajová","Františka Župková","Jakub Vrána","Jakub Župka","Jan Župka","Jiří Župka","Josef Župka","Martin Župka"]},{"id":"tatouňovice","name":"Tatouňovice","lat":49.744,"lng":14.821,"count":7,"surnames":["Honka","Mudroch","Wošatkin"],"min_year":1682,"max_year":1784,"region":"Střední Čechy","people":["Elisabetha Mudrochová","František Mudroch","Jakub Mudroch","Marie Honka","Václav Mudroch","Weronica Wošatkin"]},{"id":"načeradec","name":"Načeradec","lat":49.651,"lng":14.836,"count":7,"surnames":["Czenský","Javorský","Král","Čenská"],"min_year":1774,"max_year":1937,"region":"Střední Čechy","people":["Anna Javorská","Antonie Rollant","Josef Javorský","Karel Kašpar Czenský","Karel Král","Karel Ludvík Čenský","Milada Čenská"]},{"id":"nučice","name":"Nučice","lat":49.936,"lng":14.751,"count":7,"surnames":["Hejtmánek","Hejtmánková","Hlaváček"],"min_year":1729,"max_year":1829,"region":"Střední Čechy","people":["Ján Hlaváček","Kateřina Hejtmánková","Magdalena Svatušková","Martin Hejtmánek","Matěj Hejtmánek","Matěj Hlaváček","Václav Hlaváček"]},{"id":"dolní_kruty","name":"Dolní Kruty","lat":50.029,"lng":14.985,"count":7,"surnames":["Kubelka","Kubelková","Čaubal"],"min_year":1671,"max_year":1739,"region":"Kolínsko","people":["Dorota Kubelková","Jan Čaubal","Jiří Kubelka","Jiří Čaubal","Marie Magdalena Šmejkal","Pavel Kubelka"]},{"id":"benešov","name":"Benešov","lat":49.7817,"lng":14.6864,"count":6,"surnames":["Kählig","Macháček","Proksch","Uhlář"],"min_year":1817,"max_year":1992,"region":"Střední Čechy","people":["Eduard Rudolf Proksch","Elisabeth Sofia Kählig","František Xaver Macháček","Ida Marie Macháčková","Jan Macháček","Martin Eduard Uhlář"]},{"id":"jankov","name":"Jankov","lat":49.671,"lng":14.729,"count":6,"surnames":["Křížek","Sedláček","Tomanová","Veselý"],"min_year":1789,"max_year":1911,"region":"Střední Čechy","people":["Anna Sedláčková","Barbora Veselá","František Sedláček","František Veselý","Josefa Tomanová","Marie Křížek"]},{"id":"veltěže","name":"Veltěže","lat":50.289,"lng":14.076,"count":6,"surnames":["Graf","Tachecí","Vierekl","Viereklová"],"min_year":1789,"max_year":1854,"region":"Slánsko","people":["Anna Maria Graf","Anna Viereklová","Augustin Graf","Jacob Graf","Johann Vierekl","Marie Tachecí"]},{"id":"brňany","name":"Brňany","lat":50.421,"lng":14.195,"count":6,"surnames":["Kohejl Tachecí","Satranová","Tachecí"],"min_year":1673,"max_year":1825,"region":"Slánsko","people":["Josephus Benedictus Tachecí","Pavel Hermenegild Tachecí","Pavel Tomáš Tachecí","Veronika Satranová","Václav Tachecí","Václav Tomáš Kohejl Tachecí"]},{"id":"horní_hrachovice","name":"Horní Hrachovice","lat":49.588,"lng":14.806,"count":6,"surnames":["Czenský","Vavák","Wavak"],"min_year":1525,"max_year":1734,"region":"Střední Čechy","people":["František Czenský","Jakub Czenský","Jan Czenský","Kateřina Wavak","Petr Vavák","Tomáš Czenský"]},{"id":"velké_kunčice","name":"Velké Kunčice","lat":49.775,"lng":18.353,"count":6,"surnames":["Kožušník","Kožušníková","Mutinová"],"min_year":1774,"max_year":1894,"region":"Slezsko","people":["František Kožušník","Jan Kožušník","Johana Mutinová","Josef Kožušník","Ludmila Kožušníková"]},{"id":"hlučín","name":"Hlučín","lat":49.8989,"lng":18.1884,"count":6,"surnames":["Gold","Tegel"],"min_year":1760,"max_year":1838,"region":"Slezsko","people":["Joannes Gold","Johann Gold","Petr Johann Gold","Therezia Tegel"]},{"id":"albrechtice","name":"Albrechtice (Jezeří)","lat":50.533,"lng":13.493,"count":6,"surnames":["Glasser","Hollmotz","Proksch","Richter"],"min_year":1769,"max_year":1843,"region":"Severní Čechy","people":["Anna Elizabetha Hollmotz","Anna Francizka Glasser","Anna Maria Richter","Eduard Proksch","Joannes Andreas Proksch","Johannes Andreas Hollmotz"]},{"id":"záhoříčko","name":"Záhoříčko","lat":49.751,"lng":14.834,"count":5,"surnames":["Křemen"],"min_year":1678,"max_year":1846,"region":"Střední Čechy","people":["Anna Křemen","Jan Křemen","Pavel Křemen","Petr Křemen","Václav Křemen"]},{"id":"hrnčíře","name":"Hrnčíře","lat":49.62,"lng":14.861,"count":5,"surnames":["Javorský","Parus"],"min_year":1734,"max_year":1843,"region":"Střední Čechy","people":["Dorota Parus","Jiří Javorský","Pavel Parus","Václav Javorský","Vít Javorský"]},{"id":"výžerky","name":"Výžerky","lat":49.987,"lng":14.753,"count":5,"surnames":["Hejtmánek","Kulhánková"],"min_year":1660,"max_year":1768,"region":"Střední Čechy","people":["Anna Kulhánková","Martin Hejtmánek","Matěj Hejtmánek","Václav Hejtmánek"]},{"id":"dušníky","name":"Dušníky","lat":50.358,"lng":14.448,"count":5,"surnames":["Brhovská","Brhovský","Novotná"],"min_year":1778,"max_year":1846,"region":"Mělnicko","people":["Alžbeta Brhovská","Barbora Novotná","Josef Brhovský","Martin Novotný","Matěj Brhovský"]},{"id":"třebíz","name":"Třebíz","lat":50.289,"lng":14.058,"count":5,"surnames":["Brhovská","Horová","Plívová","Zázvorka"],"min_year":1828,"max_year":1920,"region":"Slánsko","people":["Alžbeta Brhovská","Božena Horová","Josef Zázvorka","Karolína Zázvorková","Marie Plívová"]},{"id":"daměnice","name":"Daměnice","lat":49.705,"lng":14.856,"count":5,"surnames":["Czenský","Janouš"],"min_year":1699,"max_year":1828,"region":"Střední Čechy","people":["František Czenský","Jakub Janouš","Karel Kašpar Czenský","Kateřina Janouš","Kateřina Suchanová z Prudic"]},{"id":"klenovice","name":"Klenovice na Hané","lat":49.363,"lng":17.154,"count":5,"surnames":["Novotný","Vláčilová","Ševčíková"],"min_year":1746,"max_year":1830,"region":"Střední Morava","people":["Dominik Novotný","František Novotný","Jan Novotný","Tereza Ševčíková","Viktorie Vláčilová"]},{"id":"langendorf","name":"Langendorf","lat":49.921,"lng":18.198,"count":5,"surnames":["Jureczek","Svaczina"],"min_year":1660,"max_year":1732,"region":"Slezsko","people":["Anna Jurezek","Martinus Svaczina","Matthias Svaczina","Simon Jureczek Jaroschek"]},{"id":"běleč","name":"Běleč","lat":49.559,"lng":14.871,"count":5,"surnames":["Fialová","Král","Nedvědová","Stibor"],"min_year":1753,"max_year":1876,"region":"Střední Čechy","people":["Dorota Fialová","Josef Stibor","Kateřina Nedvědová","Marie Stiborová","Václav Král"]},{"id":"charvatce","name":"Charvatce","lat":50.412,"lng":14.121,"count":4,"surnames":["Holub","Holubová","Kaše","Kučerová"],"min_year":1769,"max_year":1881,"region":"Slánsko","people":["Anna Holubová","Josef Holub","Kateřina Kučerová","Rosalie Kaše"]},{"id":"polkovice","name":"Polkovice","lat":49.374,"lng":17.399,"count":4,"surnames":["Jílek","Vláčil","Vrtělová"],"min_year":1746,"max_year":1791,"region":"Střední Morava","people":["Brigitta Vrtělová","Gabriel Vláčil","Klára Jílek","Tereza Ševčíková"]},{"id":"zlobice","name":"Zlobice","lat":49.341,"lng":17.254,"count":4,"surnames":["Hlobilová","Kmíchal","Zmidlochová"],"min_year":1772,"max_year":1810,"region":"Střední Morava","people":["Apolonie Zmidlochová","Jan Kmíchal","Marianna Kmíchalová","Veronika Hlobilová"]},{"id":"milovanice","name":"Milovanice","lat":49.388,"lng":14.152,"count":4,"surnames":["Hruška"],"min_year":1632,"max_year":1814,"region":"Písecko","people":["Jan Hruška","Josef Hruška","Vojtěch Hruška","Václav Hruška"]},{"id":"roudnice","name":"Roudnice nad Labem","lat":50.4257,"lng":14.2173,"count":4,"surnames":["Anger","Janovská","Mašek"],"min_year":1784,"max_year":1811,"region":"Litoměřicko","people":["Alžběta Anger","Anna Mašková","Jan Mašek","Marie Anna Janovská"]},{"id":"bohuslavice","name":"Bohuslavice","lat":49.964,"lng":18.134,"count":3,"surnames":["Kermascher","Kermatschek","Pustelník"],"min_year":1756,"max_year":1788,"region":"Slezsko","people":["Marianna Kermascher","Matthias Kermatschek","Thomas Pustelník"]},{"id":"kozmice","name":"Kozmice","lat":49.912,"lng":18.161,"count":3,"surnames":["Kermascher","Pustelník"],"min_year":1788,"max_year":1819,"region":"Slezsko","people":["Konstantin Pustelník","Marianna Kermascher","Thomas Pustelník"]},{"id":"ludgeřovice","name":"Ludgeřovice","lat":49.875,"lng":18.242,"count":3,"surnames":["Svačina","Svačinová"],"min_year":1799,"max_year":1851,"region":"Slezsko","people":["Antonie Svačinová","Antonín Svačina","Matyáš Svačina"]},{"id":"senohraby","name":"Senohraby","lat":49.919,"lng":14.715,"count":3,"surnames":["Horová","Tachecí"],"min_year":1912,"max_year":1942,"region":"Střední Čechy","people":["Anna Tachecí","Božena Horová","Jaroslav Tachecí"]},{"id":"křivenice","name":"Křivenice","lat":50.401,"lng":14.318,"count":3,"surnames":["Feixová","Novák","Nováková"],"min_year":1730,"max_year":1814,"region":"Mělnicko","people":["Anna Tereza Feixová","Josephus Novák","Ludmila Nováková"]},{"id":"praha","name":"Praha","lat":50.0755,"lng":14.4378,"count":3,"surnames":["Křemenová","Prokschová","Uhlářová"],"min_year":1935,"max_year":2021,"region":"Praha","people":["Jana Prokschová","Monika Štěpánka Uhlářová","Vlasta Křemenová"]},{"id":"horní_hrachovice2","name":"Horní Hrachovice (starší)","lat":49.591,"lng":14.812,"count":3,"surnames":["Czenský"],"min_year":1525,"max_year":1620,"region":"Střední Čechy","people":["Jan Czenský starší","Tomáš Czenský","Jakub z Černé"]},{"id":"bílina","name":"Bílina","lat":50.549,"lng":13.781,"count":2,"surnames":["Kählig"],"min_year":1759,"max_year":1787,"region":"Severní Čechy","people":["Georgius Friedericus Wilhelmus Kählig","Gottfried Kählig"]},{"id":"ostravice","name":"Ostravice","lat":49.571,"lng":18.234,"count":1,"surnames":["Uhlář"],"min_year":1872,"max_year":1872,"region":"Slezsko","people":["Jan Uhlář"]}]

/* ─── component ───────────────────────────────────────── */

const RodMap = () => {
  const mapDivRef = useRef(null)
  const leafletRef = useRef(null)
  const markerElsRef = useRef({})
  const lastSetRef = useRef(new Set())
  const autoplayRef = useRef(null)

  const [currentYear, setCurrentYear] = useState(1525)
  const [visibleCount, setVisibleCount] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState(null)

  const updateMap = (year) => {
    const y = parseInt(year)
    setCurrentYear(y)
    let visible = 0
    PLACES.forEach(p => {
      const el = markerElsRef.current[p.id]
      if (!el) return
      const show = !p.min_year || p.min_year <= y
      const wasVisible = lastSetRef.current.has(p.id)
      if (show) {
        el.style.display = 'block'
        visible++
        if (!wasVisible) {
          el.classList.add('pulse')
          setTimeout(() => el.classList.remove('pulse'), 800)
          lastSetRef.current.add(p.id)
        }
      } else {
        el.style.display = 'none'
        lastSetRef.current.delete(p.id)
      }
    })
    setVisibleCount(visible)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) { clearInterval(autoplayRef.current); autoplayRef.current = null }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !mapDivRef.current || leafletRef.current) return

    // Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // Marker pulse CSS
    const style = document.createElement('style')
    style.textContent = `
      @keyframes rodPulse {
        0%   { box-shadow: 0 0 0 0 rgba(191,161,69,.6), 0 0 6px rgba(191,161,69,.5); }
        100% { box-shadow: 0 0 0 10px rgba(191,161,69,0), 0 0 6px rgba(191,161,69,.5); }
      }
      .rod-marker.pulse  { animation: rodPulse .8s ease-out; }
      .rod-marker.active { transform: scale(1.5) !important; box-shadow: 0 0 0 2px #d4b96a, 0 0 16px rgba(191,161,69,.7) !important; }
    `
    document.head.appendChild(style)

    import('leaflet').then(L => {
      if (leafletRef.current) return
      const map = L.map(mapDivRef.current, { center: [49.95, 15.9], zoom: 7, zoomControl: true, attributionControl: false })
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', maxZoom: 18 }).addTo(map)
      leafletRef.current = map

      const markerSize = c => Math.round(6 + Math.log(c) * 4.5)

      PLACES.forEach(p => {
        const size = markerSize(p.count)
        const el = document.createElement('div')
        el.className = 'rod-marker'
        el.style.cssText = `width:${size}px;height:${size}px;display:none;border-radius:50%;cursor:pointer;background:#bfa145;border:2px solid rgba(10,10,10,.8);box-shadow:0 0 0 1px #bfa145,0 0 6px rgba(191,161,69,.5);transition:transform .25s,box-shadow .25s;`
        const icon = L.divIcon({ html: el, className: '', iconSize: [size, size], iconAnchor: [size / 2, size / 2] })
        const marker = L.marker([p.lat, p.lng], { icon })
        marker.bindPopup(
          `<div class="popup-name">${p.name}</div><div class="popup-count">${p.count} ${p.count === 1 ? 'předek' : p.count < 5 ? 'předci' : 'předků'}</div><div class="popup-hint">Klikni pro detail →</div>`,
          { closeButton: false, offset: [0, -size / 2] }
        )
        marker.on('click', () => {
          setSelectedPlace(p)
          map.setView([p.lat, p.lng], Math.max(map.getZoom(), 10), { animate: true })
          Object.values(markerElsRef.current).forEach(e => e.classList.remove('active'))
          el.classList.add('active')
        })
        marker.addTo(map)
        markerElsRef.current[p.id] = el
      })

      // Autoplay 1525 → 2024
      let y = 1525
      autoplayRef.current = setInterval(() => {
        y += 2
        if (y > 2024) { clearInterval(autoplayRef.current); autoplayRef.current = null; return }
        // update markers directly to avoid stale closure issues with React state
        setCurrentYear(y)
        let vis = 0
        PLACES.forEach(p => {
          const el = markerElsRef.current[p.id]
          if (!el) return
          const show = !p.min_year || p.min_year <= y
          const wasVis = lastSetRef.current.has(p.id)
          if (show) {
            el.style.display = 'block'; vis++
            if (!wasVis) { el.classList.add('pulse'); setTimeout(() => el.classList.remove('pulse'), 800); lastSetRef.current.add(p.id) }
          } else { el.style.display = 'none'; lastSetRef.current.delete(p.id) }
        })
        setVisibleCount(vis)
      }, 25)
    })

    return () => {
      stopAutoplay()
      if (leafletRef.current) { leafletRef.current.remove(); leafletRef.current = null }
    }
  }, [])

  const yearLabel = currentYear <= 1525 ? '~1525' : currentYear >= 2024 ? 'dnes' : String(currentYear)
  const plural = n => n === 1 ? 'předek' : n < 5 ? 'předci' : 'předků'

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* HEADER */}
        <Header>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <HBrand href="/"><em>Martin</em> Uhlář</HBrand>
            <HSub>Mapa rodů · předci Kamily &amp; Moniky</HSub>
          </div>
          <HStats>
            <HStat><HStatNum>{PLACES.length}</HStatNum><HStatLbl>míst</HStatLbl></HStat>
            <HSep />
            <HStat><HStatNum>877</HStatNum><HStatLbl>předků</HStatLbl></HStat>
            <HSep />
            <HStat><HStatNum>{visibleCount}</HStatNum><HStatLbl>zobrazeno</HStatLbl></HStat>
          </HStats>
          <HBack href="/">← Zpět</HBack>
        </Header>

        {/* MAP + SIDEBAR */}
        <Body>
          <MapContainer ref={mapDivRef} />
          <Sidebar>
            {!selectedPlace ? (
              <SbEmpty>
                <div className="orn">✦</div>
                <p>Přetáhni slider níže<br />nebo klikni na místo na mapě</p>
              </SbEmpty>
            ) : (
              <SbContent>
                <SbRegion>{selectedPlace.region}</SbRegion>
                <SbName>{selectedPlace.name}</SbName>
                <SbYears>
                  {selectedPlace.min_year && selectedPlace.max_year
                    ? selectedPlace.min_year === selectedPlace.max_year
                      ? `${selectedPlace.min_year}`
                      : `${selectedPlace.min_year} – ${selectedPlace.max_year}`
                    : '–'}
                </SbYears>
                <SbBadge>
                  <SbBadgeNum>{selectedPlace.count}</SbBadgeNum>
                  <SbBadgeLbl>{plural(selectedPlace.count)}</SbBadgeLbl>
                </SbBadge>
                <SbLabel>Příjmení</SbLabel>
                <SbSurnameRow>{selectedPlace.surnames.map(s => <SbSurname key={s}>{s}</SbSurname>)}</SbSurnameRow>
                <SbDivider />
                <SbLabel>Osoby</SbLabel>
                <SbPeople>
                  {selectedPlace.people.filter(Boolean).slice(0, 12).map((n, i) => <SbPerson key={i}>{n}</SbPerson>)}
                  {selectedPlace.people.filter(Boolean).length > 12 && (
                    <SbMore>…a {selectedPlace.people.filter(Boolean).length - 12} dalších</SbMore>
                  )}
                </SbPeople>
              </SbContent>
            )}
          </Sidebar>
        </Body>

        {/* TIMELINE */}
        <Timeline>
          <TlTop>
            <TlYear>{yearLabel}</TlYear>
            <TlInfo>Zobrazeno: <span>{visibleCount}</span> / <span>{PLACES.length}</span> míst</TlInfo>
          </TlTop>
          <TlSlider
            type="range" min="1525" max="2024" value={currentYear} step="1"
            onChange={e => { stopAutoplay(); updateMap(e.target.value) }}
            onMouseDown={stopAutoplay} onTouchStart={stopAutoplay}
          />
          <TlTicks>
            {MILESTONES.map(m => (
              <TlTick key={m} $active={m <= currentYear}
                onClick={() => { stopAutoplay(); updateMap(m) }}>
                {m === 2024 ? 'dnes' : m}
              </TlTick>
            ))}
          </TlTicks>
        </Timeline>
      </Wrapper>
    </>
  )
}

export default RodMap
