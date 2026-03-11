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

const PLACES = [{"id":"_d_nice","name":"Ždánice","lat":50.058,"lng":14.896,"count":17,"min_year":1654,"max_year":1815,"people":["Jakub Kulhavý","Dorota Vaněčková","Anna Holubová","Tomáš Vosecký","Tomáš Vosecký","Jan Kulhavý","Catharina","Jan Nehasil","Kateřina Kulhavá","Kateřina Vosecká","Anna Nehasilová","Josef Staněk","Matěj Holub","Václav Kulhavý","Jiří Kulhavý","Matěj Vosecký","Matěj Vaněček"],"surnames":["Kulhavý","Vaněčková","Holubová","Vosecký","Catharina","Nehasil","Kulhavá","Vosecká"]},{"id":"telce","name":"Telce","lat":50.278,"lng":13.952,"count":13,"min_year":1677,"max_year":1820,"people":["Ludmila Reifová","Martin Adam Hora","Alžběta Sadílková","Kateřina Římovská","Karel Lev","Veronika Kalíková","Anna Levová","Rosaria","Jan Hora","Josef (Václav) Hora","Joseph Hora","Anna Horová","Jan Římovský"],"surnames":["Reifová","Hora","Sadílková","Římovská","Lev","Kalíková","Levová","Rosaria"]},{"id":"star__pr_ch_any","name":"Staré Práchňany","lat":49.698,"lng":14.908,"count":12,"min_year":1756,"max_year":1876,"people":["Čeněk Kletečka","František Mička","Anna","Františka Mičková","Jan Kletečka","Josef Kletečka","František Kletečka","Bartoloměj Kletečka","Barbora Kletečková","Václav Kletečka","Antonín Kletečka","Marie Magdalena Zemanová"],"surnames":["Kletečka","Mička","Anna","Mičková","Kletečková","Zemanová"]},{"id":"uh_i_ice","name":"Uhřičice","lat":49.349,"lng":17.351,"count":11,"min_year":1741,"max_year":1889,"people":["Terezie Hapalová","Lucie Urbánková - Vránová","Božena Vránová","Martina Dusíková","Jan Vrána","Ignác Roubal","Martin Roubal","Jan Vrána","František Vrána","Mariana Roubalová","Martin Hapal"],"surnames":["Hapalová","Vránová","Dusíková","Vrána","Roubal","Roubalová","Hapal"]},{"id":"hukvaldy","name":"Hukvaldy","lat":49.624,"lng":18.189,"count":11,"min_year":1670,"max_year":1843,"people":["Anna","Fabianus Sobotík","Johanna Boháč","Jozef Johann Uhlář","Václav Boháč","Georgius Uhlarz","Eduard Uhlář","Josefus Blasius Andreas Uhlarz","Anna Rosaria Sobotík","Francisca Rek","Johann Thomas Uhlář"],"surnames":["Anna","Sobotík","Boháč","Uhlář","Uhlarz","Rek"]},{"id":"vlkan_ice","name":"Vlkančice","lat":49.857,"lng":14.761,"count":10,"min_year":1722,"max_year":1825,"people":["Josef Švanda","Jan Pohořelý","Josef Novák","Kateřina Švandová","Antonín Novák","Magdalena","Josef Novák","Antonín Pohořelý","Barbora Drožová","Josephus Švanda"],"surnames":["Švanda","Pohořelý","Novák","Švandová","Magdalena","Drožová"]},{"id":"peruc","name":"Peruc","lat":50.324,"lng":13.988,"count":10,"min_year":1645,"max_year":1769,"people":["Kateřina Čápová","Jiřík Římovský","Jiřík Zázvorka","Josef Zázvorka","Kateřina Kučerová","Mikuláš Římovský","Tomáš Zázvorka","Marie Zázvorková","Anna Zázvorková","Kašpar Kučera"],"surnames":["Čápová","Římovský","Zázvorka","Kučerová","Zázvorková","Kučera"]},{"id":"rychvald","name":"Rychvald","lat":49.848,"lng":18.366,"count":10,"min_year":1751,"max_year":1888,"people":["Josef Tkaczyk","Veronika Žebráková","Barbora Bajboková","Ondřej Žebrák","Ondřej Žebrák","František Pardubický","Marianna Hanusek","Adelheid Tkaczyk","Josef Pardubicki","Františka Rygielová"],"surnames":["Tkaczyk","Žebráková","Bajboková","Žebrák","Pardubický","Hanusek","Pardubicki","Rygielová"]},{"id":"na_eradec","name":"Načeradec","lat":49.651,"lng":14.836,"count":9,"min_year":1741,"max_year":1922,"people":["Anna Javorská","Karel Král","Antonie Rollant","Marie Halová","Antonín Čenský","Rosalie Svobodová","Milada Čenská","Josef Hála","Karel Ludvík Čenský"],"surnames":["Javorská","Král","Rollant","Halová","Čenský","Svobodová","Čenská","Hála"]},{"id":"prav_tice","name":"Pravětice","lat":49.663,"lng":14.887,"count":8,"min_year":1775,"max_year":1937,"people":["Marie Halaška","Marie Magdalena Benešová","Barbora Merksbauerová","Josef Václav Javorský","Josef Javorský","Josef Beneš","Josef Javorský","Josef Beneš"],"surnames":["Halaška","Benešová","Merksbauerová","Javorský","Beneš"]},{"id":"hrn___e","name":"Hrnčíře","lat":49.62,"lng":14.861,"count":7,"min_year":1731,"max_year":1843,"people":["Václav Javorský","Jiří Javorský","Václav Javorský","Dorota","Vít Javorský","Pavel Parus","Dorota Parus"],"surnames":["Javorský","Dorota","Parus"]},{"id":"p_estavlky","name":"Přestavlky","lat":50.089,"lng":14.912,"count":7,"min_year":1622,"max_year":1783,"people":["Matěj Šifalda","Václav Kubelka zvaný Hurt","Jakub Šifalda","Václav Mikule","Kateřina Mikule","","Kateřina Šifalda"],"surnames":["Šifalda","Hurt","Mikule"]},{"id":"ludge_ovice","name":"Ludgeřovice","lat":49.875,"lng":18.242,"count":7,"min_year":1732,"max_year":1851,"people":["Barbara","Therezia Tegel","Anna Jurezek","Matthias Svaczina","Matyáš Svačina","Antonín Svačina","Antonie Svačinová"],"surnames":["Barbara","Tegel","Jurezek","Svaczina","Svačina","Svačinová"]},{"id":"tatou_ovice","name":"Tatouňovice","lat":49.744,"lng":14.821,"count":7,"min_year":1682,"max_year":1784,"people":["František Mudroch","Jakub Mudroch","Marie Honka","Elisabetha Mudrochová","Marie Magdalena","Václav Mudroch","Weronica Wošatkin"],"surnames":["Mudroch","Honka","Mudrochová","Magdalena","Wošatkin"]},{"id":"ole_ka","name":"Oleška","lat":49.927,"lng":14.776,"count":7,"min_year":1771,"max_year":1925,"people":["Václav Kopecký","Stanislav František Pohořelý","Anežka Kopecká","Martin Šedina","Kateřina Burdová","Barbora Šedina","Marie Vosecká"],"surnames":["Kopecký","Pohořelý","Kopecká","Šedina","Burdová","Vosecká"]},{"id":"hru_ka","name":"Hruška","lat":49.384,"lng":17.19,"count":7,"min_year":1625,"max_year":1781,"people":["Jiří Župka","Jan Župka","Jakub Župka","Dorota Kahajová","Františka Župková - Vránová","Martin Župka","Jakub Vrána"],"surnames":["Župka","Kahajová","Vránová","Vrána"]},{"id":"z_ho___ko","name":"Záhoříčko","lat":49.751,"lng":14.834,"count":6,"min_year":1678,"max_year":1846,"people":["Jan Křemen","Jan Křemen","Pavel Křemen","Petr Křemen","Jan Křemen","Václav Křemen"],"surnames":["Křemen"]},{"id":"bohou_ovice_ii","name":"Bohouňovice II","lat":50.012,"lng":14.945,"count":6,"min_year":1599,"max_year":1763,"people":["Magdalena Čaubalová","Dorota Pitáková","Matěj Kubelka","Tomáš Koželský","Alžběta Kubelková","Ludmila Novotná"],"surnames":["Čaubalová","Pitáková","Kubelka","Koželský","Kubelková","Novotná"]},{"id":"rodn_","name":"Rodná","lat":49.607,"lng":14.853,"count":6,"min_year":1721,"max_year":1853,"people":["Josef Král","Karel Král","Matěj Král","Marie Anna Stejskalová","Václav Stejskal","Matouš Král"],"surnames":["Král","Stejskalová","Stejskal"]},{"id":"velk__kun_ice","name":"Velké Kunčice","lat":49.775,"lng":18.353,"count":6,"min_year":1774,"max_year":1894,"people":["František Kožušník","Johana Mutinová","Josef Kožušník","Jan Kožušník","Ludmila Kožušníková","Mariana"],"surnames":["Kožušník","Mutinová","Kožušníková","Mariana"]},{"id":"albrechtice","name":"Albrechtice","lat":50.533,"lng":13.493,"count":6,"min_year":1733,"max_year":1843,"people":["Maria Anna Hennlich","Anna Elizabetha Hollmotz","Eduard Proksch","Johannes Andreas Hollmotz","Anna Francizka Glasser","Joannes Andreas Proksch"],"surnames":["Hennlich","Hollmotz","Proksch","Glasser"]},{"id":"du_n_ky","name":"Dušníky","lat":50.358,"lng":14.448,"count":6,"min_year":1778,"max_year":1846,"people":["Josef Brhovský","Josef Brhovský","Barbora Novotná","Martin Novotný","Alžbeta Brhovská","Matěj Brhovský"],"surnames":["Brhovský","Novotná","Novotný","Brhovská"]},{"id":"horn__hrachovice","name":"Horní Hrachovice","lat":49.588,"lng":14.806,"count":6,"min_year":1525,"max_year":1734,"people":["Kateřina Wavak","Tomáš Czenský","Jan Czenský","Jakub Czenský","Petr Vavák","František Czenský"],"surnames":["Wavak","Czenský","Vavák"]},{"id":"milovanice","name":"Milovanice","lat":49.388,"lng":14.152,"count":6,"min_year":1632,"max_year":1814,"people":["Václav Hruška","Josef Hruška","Jan Hruška","Vojtěch Hruška","Jan Hruška","Václav Hruška"],"surnames":["Hruška"]},{"id":"polepy","name":"Polepy","lat":50.461,"lng":14.134,"count":6,"min_year":1650,"max_year":1779,"people":["Wincenz Anger","Tomáš Nikodým Satran","Veronica Kutin?","Anna Švachtová","Kateřina Macková","Karel Anger"],"surnames":["Anger","Satran","Kutin?","Švachtová","Macková"]},{"id":"moravsk__ostrava","name":"Moravská Ostrava","lat":49.8356,"lng":18.2921,"count":6,"min_year":1755,"max_year":1905,"people":["Bedřich Eduard Uhlář","Rosina Poledníková","Anna Gärtner","Petronilla Volný","Michael Gärtner","Marie Gold"],"surnames":["Uhlář","Poledníková","Gärtner","Volný","Gold"]},{"id":"b_le_","name":"Běleč","lat":49.559,"lng":14.871,"count":5,"min_year":1753,"max_year":1876,"people":["Marie Stiborová","Josef Stibor","Kateřina Nedvědová","Václav Král","Veronika Vítek"],"surnames":["Stiborová","Stibor","Nedvědová","Král","Vítek"]},{"id":"cerhenice","name":"Cerhenice","lat":50.091,"lng":15.091,"count":5,"min_year":1847,"max_year":1874,"people":["Josef Němec","Jan Němec","František Holub","Ludmila Němcová","Dorota Waniecžek"],"surnames":["Němec","Holub","Němcová","Waniecžek"]},{"id":"lhotka","name":"Lhotka","lat":49.887,"lng":18.231,"count":5,"min_year":1660,"max_year":1660,"people":["Jacobus Svaczina Swaczena","Katharina","Martinus Svaczina","Georgius Svaczina","Simon Jureczek Jaroschek"],"surnames":["Swaczena","Katharina","Svaczina","Jaroschek"]},{"id":"br_any","name":"Brňany","lat":50.421,"lng":14.195,"count":5,"min_year":1673,"max_year":1825,"people":["Václav Tachecí","Pavel Tomáš Tachecí","Josephus Benedictus Tachecí","Václav Tomáš Kohejl Tachecí","Pavel Hermenegild Tachecí"],"surnames":["Tachecí"]},{"id":"nu_ice","name":"Nučice","lat":49.936,"lng":14.751,"count":5,"min_year":1798,"max_year":1831,"people":["Kateřina Papeš","Kateřina Hejtmánková","Matěj Hlaváček","Václav Hlaváček","Ján Hlaváček"],"surnames":["Papeš","Hejtmánková","Hlaváček"]},{"id":"velt__e","name":"Veltěže","lat":50.289,"lng":14.076,"count":5,"min_year":1790,"max_year":1854,"people":["Marie Tachecí","Augustin Graf","Jacob Graf","Anna Maria Graf","Anna Viereklová"],"surnames":["Tachecí","Graf","Viereklová"]},{"id":"chot__ov","name":"Chotěšov","lat":50.435,"lng":14.151,"count":4,"min_year":1766,"max_year":1790,"people":["Kateřina Hoffmann","Václav Hrzán","Marianna Hrzánová","Jan Hrzán"],"surnames":["Hoffmann","Hrzán","Hrzánová"]},{"id":"dam_nice","name":"Daměnice","lat":49.705,"lng":14.856,"count":4,"min_year":1774,"max_year":1828,"people":["Karel Kašpar Czenský","Kateřina Janouš","Jan Janouš","Jakub Janouš"],"surnames":["Czenský","Janouš"]},{"id":"praha","name":"Praha","lat":50.0755,"lng":14.4378,"count":4,"min_year":1935,"max_year":2023,"people":["Kamila Uhlářová","Monika Štěpánka Uhlářová","Vlasta Křemenová","Jana Prokschová"],"surnames":["Uhlářová","Křemenová","Prokschová"]},{"id":"m_lnick__vtelno","name":"Mělnické Vtelno","lat":50.399,"lng":14.388,"count":4,"min_year":1595,"max_year":1678,"people":["Jiří Borecký","Petr Borecký","Jindřich Borecký","Kateřina Borecká"],"surnames":["Borecký","Borecká"]},{"id":"bene_ov","name":"Benešov","lat":49.7817,"lng":14.6864,"count":4,"min_year":1817,"max_year":1992,"people":["Eduard Rudolf Bedřich František Proksch","Martin Eduard Uhlář","Ida Marie Anna Leontina Alžběta Macháčková","Jan Macháček"],"surnames":["Proksch","Uhlář","Macháčková","Macháček"]},{"id":"hlu__n","name":"Hlučín","lat":49.8989,"lng":18.1884,"count":4,"min_year":1760,"max_year":1797,"people":["Theresia KastiříkováRastiříková","Joannes Gold","Johann Gold","Joanna"],"surnames":["KastiříkováRastiříková","Gold","Joanna"]},{"id":"klenovice_na_han_","name":"Klenovice na Hané","lat":49.363,"lng":17.154,"count":4,"min_year":1746,"max_year":1830,"people":["Dominik Novotný","Jan Novotný","Viktorie Vláčilová","František Novotný"],"surnames":["Novotný","Vláčilová"]},{"id":"palkovice","name":"Palkovice","lat":49.613,"lng":18.252,"count":4,"min_year":1759,"max_year":1794,"people":["Mariana Zaoral","Bartoloměj Vláčil","Rosalie Skulil","Jan Zaoral"],"surnames":["Zaoral","Vláčil","Skulil"]},{"id":"roudnice_nad_labem","name":"Roudnice nad Labem","lat":50.4257,"lng":14.2173,"count":4,"min_year":1784,"max_year":1811,"people":["Jan Mašek","Anna Mašková","Marie Anna Janovská","Alžběta Anger"],"surnames":["Mašek","Mašková","Janovská","Anger"]},{"id":"vole_n_","name":"Volešná","lat":49.644,"lng":14.773,"count":3,"min_year":1827,"max_year":1872,"people":["František Slabý","Kristina Rezková","Anna Slabá"],"surnames":["Slabý","Rezková","Slabá"]},{"id":"_alkovice","name":"Žalkovice","lat":49.328,"lng":17.485,"count":3,"min_year":1738,"max_year":1768,"people":["Franciscus Černošek","Joannes Černošek","Anna Hlobil"],"surnames":["Černošek","Hlobil"]},{"id":"___nice","name":"Žďánice","lat":50.058,"lng":14.896,"count":3,"min_year":1770,"max_year":1896,"people":["Josef Pohořelý","Anna Staňková","Josef Staněk"],"surnames":["Pohořelý","Staňková","Staněk"]},{"id":"_jezdec","name":"Újezdec","lat":50.017,"lng":14.876,"count":3,"min_year":1702,"max_year":1763,"people":["Martin Jírovský","Václav Jírovský","Pawel Jírovský"],"surnames":["Jírovský"]},{"id":"radlice","name":"Radlice","lat":50.045,"lng":14.956,"count":3,"min_year":1804,"max_year":1805,"people":["Vít Bílek","Marie Jírovská","Ján Šedina"],"surnames":["Bílek","Jírovská","Šedina"]},{"id":"doln__kruty","name":"Dolní Kruty","lat":50.029,"lng":14.985,"count":3,"min_year":1701,"max_year":1739,"people":["Jiří Kubelka","Dorota Kubelková","Jan Čaubal"],"surnames":["Kubelka","Kubelková","Čaubal"]},{"id":"bukov_","name":"Buková","lat":49.655,"lng":14.932,"count":3,"min_year":1750,"max_year":1829,"people":["Josefa Malá","František Malý","Marie Magdalena Březinová"],"surnames":["Malá","Malý","Březinová"]},{"id":"_ern__ovice","name":"Černýšovice","lat":49.684,"lng":14.748,"count":3,"min_year":1786,"max_year":1825,"people":["Jan Boš","Jakub Boš","Rozálie Dušková"],"surnames":["Boš","Dušková"]},{"id":"vra_kovice","name":"Vračkovice","lat":49.768,"lng":14.854,"count":3,"min_year":1881,"max_year":1908,"people":["Josef Křemen","Josef Křemen","Josefa Kletečková"],"surnames":["Křemen","Kletečková"]},{"id":"polkovice","name":"Polkovice","lat":49.374,"lng":17.399,"count":3,"min_year":1746,"max_year":1791,"people":["Brigitta Vrtělová","Tereza Ševčíková","Gabriel Vláčil"],"surnames":["Vrtělová","Ševčíková","Vláčil"]},{"id":"noskov","name":"Noskov","lat":49.608,"lng":14.876,"count":3,"min_year":1825,"max_year":1887,"people":["Jaroslav Král","Františka Nedvědová","František Nedvěd"],"surnames":["Král","Nedvědová","Nedvěd"]},{"id":"pr_ch_any","name":"Práchňany","lat":49.698,"lng":14.908,"count":3,"min_year":1728,"max_year":1759,"people":["Václav Mička","Bartoloměj Kletečka","Eleonora Martínková"],"surnames":["Mička","Kletečka","Martínková"]},{"id":"lhotky","name":"Lhotky","lat":49.872,"lng":14.786,"count":3,"min_year":1823,"max_year":1857,"people":["Anna Dvořáková","Václav Dvořák","Magdalena Dvořáková"],"surnames":["Dvořáková","Dvořák"]},{"id":"bohuslavice","name":"Bohuslavice","lat":49.964,"lng":18.134,"count":3,"min_year":1756,"max_year":1788,"people":["Matthias Kermatschek","Thomas Pustelník","Marianna Kermascher"],"surnames":["Kermatschek","Pustelník","Kermascher"]},{"id":"zlobice","name":"Zlobice","lat":49.341,"lng":17.254,"count":3,"min_year":1772,"max_year":1784,"people":["Apolonie Zmidlochová","Jan Kmíchal","Veronika Hlobilová"],"surnames":["Zmidlochová","Kmíchal","Hlobilová"]},{"id":"st_ednice","name":"Střednice","lat":50.376,"lng":14.415,"count":3,"min_year":1595,"max_year":1630,"people":["Matěj Rynda - Weiss","Dorota Ryndová","Ludmila"],"surnames":["Weiss","Ryndová","Ludmila"]},{"id":"v__erky__kostelec_nad__ern_mi_lesy___esko","name":"Výžerky, Kostelec nad černými Lesy, česko","lat":49.987,"lng":14.753,"count":3,"min_year":1699,"max_year":1729,"people":["Matěj Hejtmánek","Martin Hejtmánek","Rozina Smejkalová"],"surnames":["Hejtmánek","Smejkalová"]},{"id":"zlonice","name":"Zlonice","lat":50.303,"lng":14.066,"count":3,"min_year":1780,"max_year":1810,"people":["Jiří Hájek","Marianna Kmíchalová","Rosalie Hájková"],"surnames":["Hájek","Kmíchalová","Hájková"]},{"id":"jankov__podol_","name":"Jankov, Podolí","lat":49.671,"lng":14.729,"count":3,"min_year":1845,"max_year":1911,"people":["Barbora Veselá","František Sedláček","Anna Sedláčková"],"surnames":["Veselá","Sedláček","Sedláčková"]},{"id":"t_tice","name":"TŘTICE","lat":50.395,"lng":14.073,"count":3,"min_year":1710,"max_year":1754,"people":["František Janovský","Kateřina","Václav Bartoloměj Janovský"],"surnames":["Janovský","Kateřina"]},{"id":"b_e_any_nad_oh__","name":"Břežany nad Ohří","lat":50.341,"lng":13.987,"count":3,"min_year":1774,"max_year":1798,"people":["Marie Barbora Šimoníčková","Jozef Šimoníček","Jan Hruška"],"surnames":["Šimoníčková","Šimoníček","Hruška"]},{"id":"skal","name":"Skal","lat":50.276,"lng":13.946,"count":3,"min_year":1768,"max_year":1797,"people":["Václav Kalík","František Zázvorka","Jan Šimon Zázvorka"],"surnames":["Kalík","Zázvorka"]},{"id":"nebu_ely","name":"Nebužely","lat":50.382,"lng":14.511,"count":3,"min_year":1530,"max_year":1677,"people":["Blažej Panoš","Bartoň Panocha","Anna Panochová"],"surnames":["Panoš","Panocha","Panochová"]},{"id":"t_eb_z","name":"Třebíz","lat":50.289,"lng":14.058,"count":3,"min_year":1840,"max_year":1920,"people":["Karolína Zázvorková","Božena Horová","Marie Plívová"],"surnames":["Zázvorková","Horová","Plívová"]},{"id":"doubrav_any","name":"Doubravčany","lat":49.879,"lng":14.805,"count":2,"min_year":1767,"max_year":1767,"people":["Magdalena Svatušková","Josef Svatuška"],"surnames":["Svatušková","Svatuška"]},{"id":"ji_t_rpy","name":"Jištěrpy","lat":50.441,"lng":14.128,"count":2,"min_year":1668,"max_year":1726,"people":["Andreas Anger","Wentzel Anger"],"surnames":["Anger"]},{"id":"rous_nov","name":"Rousínov","lat":49.854,"lng":14.779,"count":2,"min_year":1712,"max_year":1756,"people":["Jan Vít Pohořelý","Josef Pohořelý"],"surnames":["Pohořelý"]},{"id":"t_n_nad_vltavou","name":"Týn nad Vltavou","lat":49.352,"lng":14.423,"count":2,"min_year":1810,"max_year":1867,"people":["Tomáš Korbel","Anna Bošová"],"surnames":["Korbel","Bošová"]},{"id":"ctin_ves","name":"Ctiněves","lat":50.41,"lng":14.275,"count":2,"min_year":1672,"max_year":1717,"people":["Veronika Satranová","Martin Satran"],"surnames":["Satranová","Satran"]},{"id":"ji_etice","name":"Jiřetice","lat":49.671,"lng":14.765,"count":2,"min_year":1793,"max_year":1826,"people":["Marie Křížek","František Křížek"],"surnames":["Křížek"]},{"id":"bohou_ovice","name":"Bohouňovice","lat":50.012,"lng":14.945,"count":2,"min_year":1738,"max_year":1738,"people":["Václav Kozlák - Koželský","Magdalena Kubelková"],"surnames":["Koželský","Kubelková"]},{"id":"z_blat_","name":"Záblatí","lat":49.857,"lng":18.359,"count":2,"min_year":1821,"max_year":1849,"people":["Valentin Bogumski","Tekla Bogumski"],"surnames":["Bogumski"]},{"id":"t_n_nad_vltavou___bouchalka","name":"Týn nad Vltavou - Bouchalka","lat":49.352,"lng":14.423,"count":2,"min_year":1855,"max_year":1889,"people":["František Korbel","Anna Korbelová"],"surnames":["Korbel","Korbelová"]},{"id":"doln__be_kovice","name":"Dolní Beřkovice","lat":50.378,"lng":14.454,"count":2,"min_year":1730,"max_year":1774,"people":["Jan Novák","Josephus Novák"],"surnames":["Novák"]},{"id":"ra_ovice","name":"Rašovice","lat":49.391,"lng":17.282,"count":2,"min_year":1852,"max_year":1852,"people":["Anna Radvanová","Josef Kolman"],"surnames":["Radvanová","Kolman"]},{"id":"klimkovice","name":"Klimkovice","lat":49.788,"lng":18.126,"count":2,"min_year":1737,"max_year":1775,"people":["Franz Tegel","Elisabeta Grigarková"],"surnames":["Tegel","Grigarková"]},{"id":"lidice_u_slan_ho","name":"Lidice u Slanýho","lat":50.124,"lng":14.189,"count":2,"min_year":1793,"max_year":1823,"people":["Rosalie Císařová","Barbora Opltová"],"surnames":["Císařová","Opltová"]},{"id":"vilice","name":"Vilice","lat":49.634,"lng":14.872,"count":2,"min_year":1778,"max_year":1778,"people":["Dorota Fialová","Kateřina Králová"],"surnames":["Fialová","Králová"]},{"id":"jankovsk__lhota","name":"Jankovská Lhota","lat":49.656,"lng":14.742,"count":2,"min_year":1850,"max_year":1850,"people":["Františka Hrušková","František Radvan"],"surnames":["Hrušková","Radvan"]},{"id":"smilovice","name":"Smilovice","lat":49.69,"lng":18.522,"count":2,"min_year":1829,"max_year":1829,"people":["Anna Čudová","Jan Čuda"],"surnames":["Čudová","Čuda"]},{"id":"oplany","name":"Oplany","lat":49.965,"lng":14.712,"count":2,"min_year":1637,"max_year":1642,"people":["Anna Hejtmánek","Matěj Hejtmánek"],"surnames":["Hejtmánek"]},{"id":"vlko_","name":"Vlkoš","lat":49.388,"lng":17.382,"count":2,"min_year":1776,"max_year":1813,"people":["Antonín Černošek","Theresia Zoubek"],"surnames":["Černošek","Zoubek"]},{"id":"m_r_tky","name":"Měrůtky","lat":49.367,"lng":17.219,"count":2,"min_year":1807,"max_year":1843,"people":["František Hlaváč","Filip Hlaváč"],"surnames":["Hlaváč"]},{"id":"d_dice","name":"Dědice","lat":49.312,"lng":17.081,"count":2,"min_year":1793,"max_year":1819,"people":["Marie Vrtiška","Kateřina"],"surnames":["Vrtiška","Kateřina"]},{"id":"z_bo__","name":"Záboří","lat":49.421,"lng":14.132,"count":2,"min_year":1570,"max_year":1624,"people":["Martin Čížek","Salomena"],"surnames":["Čížek","Salomena"]},{"id":"skalsko","name":"Skalsko","lat":50.483,"lng":14.735,"count":2,"min_year":1629,"max_year":1629,"people":["Kateřina Pecháčková","Jan Pecháček"],"surnames":["Pecháčková","Pecháček"]},{"id":"javor","name":"Javor","lat":49.622,"lng":14.858,"count":2,"min_year":1788,"max_year":1875,"people":["Václav Javorský","Antonie Vrtišková"],"surnames":["Javorský","Vrtišková"]},{"id":"jizbice","name":"Jizbice","lat":49.644,"lng":14.826,"count":2,"min_year":1834,"max_year":1855,"people":["František de Pauli Kučera","Ignác Kučera"],"surnames":["Kučera"]},{"id":"sedlnice","name":"Sedlnice","lat":49.647,"lng":18.158,"count":2,"min_year":1814,"max_year":1845,"people":["Leopold Krischke","Magdalena Kriške"],"surnames":["Krischke","Kriške"]},{"id":"k_ivenice","name":"Křivenice","lat":50.401,"lng":14.318,"count":2,"min_year":1779,"max_year":1814,"people":["Ludmila Nováková","Anna Tereza (Kateřina) Feixová"],"surnames":["Nováková","Feixová"]},{"id":"v_hoda__horn__lutyn_","name":"Výhoda, Horní Lutyně","lat":49.871,"lng":18.413,"count":2,"min_year":1720,"max_year":1756,"people":["Pavel Pardubický","Jakub Pardubický"],"surnames":["Pardubický"]},{"id":"vr_ovice","name":"Vršovice","lat":50.059,"lng":14.459,"count":2,"min_year":null,"max_year":null,"people":["Matthias Frey","Rosalia Frey"],"surnames":["Frey"]},{"id":"rychaltice","name":"Rychaltice","lat":49.687,"lng":18.156,"count":2,"min_year":1817,"max_year":1817,"people":["Anna Kolaita","František Kolaitka"],"surnames":["Kolaita","Kolaitka"]},{"id":"chr__n","name":"Chržín","lat":50.391,"lng":14.342,"count":2,"min_year":1839,"max_year":1839,"people":["Jan Sedláček","Jan Sedláček"],"surnames":["Sedláček"]},{"id":"nakvasovice","name":"Nakvasovice","lat":49.607,"lng":18.248,"count":2,"min_year":1856,"max_year":1881,"people":["Anna Zeman","Amálie Kučerová"],"surnames":["Zeman","Kučerová"]},{"id":"velt__","name":"Veltěž","lat":50.289,"lng":14.076,"count":2,"min_year":null,"max_year":null,"people":["Kateřina Cil","Jiří Cil"],"surnames":["Cil"]},{"id":"minice","name":"Minice","lat":50.278,"lng":14.138,"count":2,"min_year":null,"max_year":null,"people":["Josef Poláček","Kateřina Poláčková"],"surnames":["Poláček","Poláčková"]},{"id":"doln__kruty__horn__kruty__okres_kol_n___esk__republika","name":"Dolní Kruty, Horní Kruty, okres Kolín, Česká republika","lat":50.029,"lng":14.985,"count":2,"min_year":1671,"max_year":1673,"people":["Magdalena","Jiří Čaubal"],"surnames":["Magdalena","Čaubal"]},{"id":"mankovice","name":"Mankovice","lat":49.697,"lng":18.041,"count":2,"min_year":1787,"max_year":1817,"people":["Alžběta Halbgebauer","Jozef Halbgebauer"],"surnames":["Halbgebauer"]},{"id":"divi_ov","name":"Divišov","lat":49.772,"lng":14.916,"count":2,"min_year":1773,"max_year":1777,"people":["Václav Drož","Ludmila Vokaunová"],"surnames":["Drož","Vokaunová"]},{"id":"z_smuky","name":"Zásmuky","lat":50.003,"lng":14.997,"count":2,"min_year":1807,"max_year":1807,"people":["Lidmila Rosalia Vendlová","Jan Vendl"],"surnames":["Vendlová","Vendl"]},{"id":"bar_ov","name":"Barčov","lat":49.884,"lng":14.812,"count":2,"min_year":1799,"max_year":1799,"people":["Marie Anna Králová","Jakub Král"],"surnames":["Králová","Král"]},{"id":"horn__kruty","name":"Horní Kruty","lat":49.998,"lng":14.989,"count":2,"min_year":1703,"max_year":1732,"people":["Pavel Kubelka","Jan Čaubal"],"surnames":["Kubelka","Čaubal"]},{"id":"b_lina","name":"Bílina","lat":50.549,"lng":13.781,"count":2,"min_year":1759,"max_year":1787,"people":["Gottfried Kählig","Georgius Friedericus Wilhelmus Kählig"],"surnames":["Kählig"]},{"id":"v__erky","name":"Výžerky","lat":49.987,"lng":14.753,"count":2,"min_year":1768,"max_year":1768,"people":["Anna Kulhánková","Matěj Hejtmánek"],"surnames":["Kulhánková","Hejtmánek"]},{"id":"b_e__any","name":"Břešťany","lat":50.413,"lng":13.786,"count":2,"min_year":1813,"max_year":1813,"people":["Jan Kaše","Rosalie Kaše"],"surnames":["Kaše"]},{"id":"ze_slav_t_na_a_z_doln_ch_hrachovic","name":"ze Slavětína a z Dolních Hrachovic","lat":49.582,"lng":14.813,"count":1,"min_year":1590,"max_year":1590,"people":["Kateřina Mazaná ze Slavětína a Dolních Hrachovic"],"surnames":["Hrachovic"]},{"id":"polsk__lutyn_","name":"Polská Lutyně","lat":49.896,"lng":18.451,"count":1,"min_year":1839,"max_year":1839,"people":["Terezie Litner"],"surnames":["Litner"]},{"id":"plze_","name":"Plzeň","lat":49.7384,"lng":13.3736,"count":1,"min_year":1884,"max_year":1884,"people":["Eduard Proksch"],"surnames":["Proksch"]},{"id":"_abov_esky","name":"Žabovřesky","lat":49.202,"lng":16.578,"count":1,"min_year":null,"max_year":null,"people":["Václav Mikule"],"surnames":["Mikule"]},{"id":"_akov","name":"Čakov","lat":49.671,"lng":14.729,"count":1,"min_year":1771,"max_year":1771,"people":["Ludmila Veselá"],"surnames":["Veselá"]},{"id":"_ern_ice","name":"Černčice","lat":50.394,"lng":13.757,"count":1,"min_year":1734,"max_year":1734,"people":["Josef Glasser"],"surnames":["Glasser"]},{"id":"v_t____ern_","name":"Větší Černá","lat":49.584,"lng":14.806,"count":1,"min_year":1535,"max_year":1535,"people":["Jakub z Černé"],"surnames":["Černé"]},{"id":"bilichov","name":"Bilichov","lat":50.271,"lng":14.055,"count":1,"min_year":1808,"max_year":1808,"people":["Josef Holub"],"surnames":["Holub"]},{"id":"vysok_","name":"Vysoká","lat":50.378,"lng":14.454,"count":1,"min_year":1565,"max_year":1565,"people":["Kateřina Zichová"],"surnames":["Zichová"]},{"id":"dudov","name":"Dudov","lat":49.684,"lng":14.748,"count":1,"min_year":1749,"max_year":1749,"people":["Kateřina Rypáček"],"surnames":["Rypáček"]},{"id":"prudice","name":"Prudice","lat":49.699,"lng":14.851,"count":1,"min_year":1699,"max_year":1699,"people":["Kateřina Suchanová z Prudic"],"surnames":["Prudic"]},{"id":"moravsk__ostrava__p__voz_","name":"Moravská ostrava, Přívoz,","lat":49.8356,"lng":18.2921,"count":1,"min_year":1912,"max_year":1912,"people":["Milada Anežka Pardubicki"],"surnames":["Pardubicki"]},{"id":"pojbuky","name":"Pojbuky","lat":49.661,"lng":14.765,"count":1,"min_year":1786,"max_year":1786,"people":["Marie Havlíková"],"surnames":["Havlíková"]},{"id":"lou_ka","name":"Loučka","lat":49.697,"lng":18.051,"count":1,"min_year":null,"max_year":null,"people":["Anna Šindelářová"],"surnames":["Šindelářová"]},{"id":"bukov_","name":"buková","lat":49.655,"lng":14.932,"count":1,"min_year":1795,"max_year":1795,"people":["Jan Malý"],"surnames":["Malý"]},{"id":"velk___ern_","name":"Velká Černá","lat":49.584,"lng":14.806,"count":1,"min_year":1570,"max_year":1570,"people":["Jan Czensky-Czernský"],"surnames":["Czensky-Czernský"]},{"id":"hru_ka___esk__republika","name":"Hruška, Česká republika","lat":49.384,"lng":17.19,"count":1,"min_year":1743,"max_year":1743,"people":["Josef Župka"],"surnames":["Župka"]},{"id":"t_t_no","name":"Třtěno","lat":50.289,"lng":14.076,"count":1,"min_year":1789,"max_year":1789,"people":["Johann Vierekl"],"surnames":["Vierekl"]},{"id":"vrbka","name":"Vrbka","lat":49.654,"lng":14.821,"count":1,"min_year":null,"max_year":null,"people":["Tomáš Podaný"],"surnames":["Podaný"]},{"id":"ben_tky","name":"Benátky","lat":50.294,"lng":14.83,"count":1,"min_year":null,"max_year":null,"people":["Anna Czapek"],"surnames":["Czapek"]},{"id":"sedlisko","name":"Sedlisko","lat":49.349,"lng":17.502,"count":1,"min_year":null,"max_year":null,"people":["Kateřina Sedloňová"],"surnames":["Sedloňová"]},{"id":"broz_nky","name":"Brozánky","lat":50.411,"lng":14.401,"count":1,"min_year":1657,"max_year":1657,"people":["Alžběta Čížková"],"surnames":["Čížková"]},{"id":"_ernochov","name":"Černochov","lat":50.327,"lng":13.973,"count":1,"min_year":null,"max_year":null,"people":["Jakub Reif"],"surnames":["Reif"]},{"id":"smilovec","name":"Smilovec","lat":49.678,"lng":14.831,"count":1,"min_year":null,"max_year":null,"people":["Marianna Šímová"],"surnames":["Šímová"]},{"id":"vilice__hrn___e","name":"Vilice/ Hrnčíře","lat":49.634,"lng":14.872,"count":1,"min_year":null,"max_year":null,"people":["Vojtěch Král"],"surnames":["Král"]},{"id":"svoj_ovice","name":"Svojšovice","lat":49.863,"lng":14.814,"count":1,"min_year":null,"max_year":null,"people":["Magdalena Motyčková"],"surnames":["Motyčková"]},{"id":"doln__lutyn_","name":"Dolní Lutyně","lat":49.889,"lng":18.424,"count":1,"min_year":1820,"max_year":1820,"people":["Franciska Neidwiedz"],"surnames":["Neidwiedz"]},{"id":"d__any_je_any","name":"Děčany/Ječany","lat":50.519,"lng":13.987,"count":1,"min_year":null,"max_year":null,"people":["Rosalia Torantz"],"surnames":["Torantz"]},{"id":"janov","name":"Janov","lat":50.435,"lng":14.16,"count":1,"min_year":null,"max_year":null,"people":["Kateřina Raška"],"surnames":["Raška"]},{"id":"jarov","name":"Jarov","lat":49.664,"lng":14.877,"count":1,"min_year":null,"max_year":null,"people":["František Javorský"],"surnames":["Javorský"]},{"id":"bobrovn_ky","name":"Bobrovníky","lat":49.853,"lng":18.144,"count":1,"min_year":1821,"max_year":1821,"people":["Anna Mikesková"],"surnames":["Mikesková"]},{"id":"_ern__vod_rady","name":"Černé Voděrady","lat":49.886,"lng":14.788,"count":1,"min_year":null,"max_year":null,"people":["Kateřina Pospíšilová"],"surnames":["Pospíšilová"]},{"id":"brnkov","name":"Brnkov","lat":50.41,"lng":14.09,"count":1,"min_year":null,"max_year":null,"people":["Jan Novotný"],"surnames":["Novotný"]},{"id":"votice","name":"Votice","lat":49.638,"lng":14.637,"count":1,"min_year":1797,"max_year":1797,"people":["František Mlíkovský, rytíř z Horní Lhoty"],"surnames":["Lhoty"]},{"id":"_ikovice","name":"Řikovice","lat":49.349,"lng":17.384,"count":1,"min_year":1852,"max_year":1852,"people":["Antonie Černošková"],"surnames":["Černošková"]},{"id":"hlu__n__ratibo__","name":"Hlučín (Ratiboř)","lat":49.8989,"lng":18.1884,"count":1,"min_year":1838,"max_year":1838,"people":["Petr Johann Gold"],"surnames":["Gold"]},{"id":"charvatce","name":"Charvatce","lat":50.412,"lng":14.121,"count":1,"min_year":1844,"max_year":1844,"people":["Josef Holub"],"surnames":["Holub"]},{"id":"vla_im","name":"Vlašim","lat":49.7056,"lng":14.8981,"count":1,"min_year":1963,"max_year":1963,"people":["Bohumil Král"],"surnames":["Král"]},{"id":"lidice_u_slan_ho","name":"Lidice u Slaného","lat":50.124,"lng":14.189,"count":1,"min_year":null,"max_year":null,"people":["Joseph Opelt"],"surnames":["Opelt"]},{"id":"doln__hrachovice","name":"Dolní Hrachovice","lat":49.582,"lng":14.813,"count":1,"min_year":1620,"max_year":1620,"people":["Dorota Bártová"],"surnames":["Bártová"]},{"id":"sudom__ice_u_bechyn_","name":"Sudoměřice u Bechyně","lat":49.298,"lng":14.567,"count":1,"min_year":1743,"max_year":1743,"people":["Pavel Boš"],"surnames":["Boš"]},{"id":"je_ov","name":"Ježov","lat":49.383,"lng":17.193,"count":1,"min_year":null,"max_year":null,"people":["Anna Novotná (svobodní)"],"surnames":["(svobodní)"]},{"id":"sva_enice","name":"Svařenice","lat":50.437,"lng":14.088,"count":1,"min_year":null,"max_year":null,"people":["Kateřina Šmídová"],"surnames":["Šmídová"]},{"id":"t_etu_el","name":"Třetužel","lat":50.409,"lng":14.125,"count":1,"min_year":null,"max_year":null,"people":["Marianna Štucová?"],"surnames":["Štucová?"]},{"id":"krivenice__vlineves_parish__melnik__bohemia","name":"Krivenice, Vlineves parish, Melnik, Bohemia","lat":50.401,"lng":14.318,"count":1,"min_year":1747,"max_year":1747,"people":["Jan Sebastian Feix"],"surnames":["Feix"]},{"id":"votruby","name":"Votruby","lat":50.078,"lng":15.049,"count":1,"min_year":1879,"max_year":1879,"people":["Václav Jan Hora"],"surnames":["Hora"]},{"id":"volenice","name":"Volenice","lat":49.212,"lng":14.001,"count":1,"min_year":null,"max_year":null,"people":["Václav Petřík"],"surnames":["Petřík"]},{"id":"doln__bene_ov","name":"Dolní Benešov","lat":49.928,"lng":18.108,"count":1,"min_year":1757,"max_year":1757,"people":["Theresia"],"surnames":["Theresia"]},{"id":"telce___skalka","name":"Telce - Skalka","lat":50.278,"lng":13.952,"count":1,"min_year":1735,"max_year":1735,"people":["Mikuláš Římovský"],"surnames":["Římovský"]},{"id":"_ernochov__peruc___esko","name":"Černochov, Peruc, Česko","lat":50.327,"lng":13.973,"count":1,"min_year":1738,"max_year":1738,"people":["Kateřina Nováková"],"surnames":["Nováková"]},{"id":"p_el_c","name":"Přelíc","lat":50.292,"lng":14.029,"count":1,"min_year":1912,"max_year":1912,"people":["Jaroslav Tachecí"],"surnames":["Tachecí"]},{"id":"kozmice","name":"Kozmice","lat":49.912,"lng":18.161,"count":1,"min_year":1819,"max_year":1819,"people":["Konstantin Pustelník"],"surnames":["Pustelník"]},{"id":"_d_nice_u_kou_im_","name":"Ždánice u Kouřimě","lat":50.058,"lng":14.896,"count":1,"min_year":1705,"max_year":1705,"people":["Anna Kulhavá"],"surnames":["Kulhavá"]},{"id":"b_kev","name":"Býkev","lat":50.414,"lng":14.454,"count":1,"min_year":1615,"max_year":1615,"people":["Václav Čížek"],"surnames":["Čížek"]},{"id":"zem_chy","name":"Zeměchy","lat":50.33,"lng":14.248,"count":1,"min_year":1844,"max_year":1844,"people":["Antonín Holub"],"surnames":["Holub"]},{"id":"senohraby","name":"Senohraby","lat":49.919,"lng":14.715,"count":1,"min_year":1942,"max_year":1942,"people":["Anna Tachecí"],"surnames":["Tachecí"]},{"id":"hore_ovice","name":"Horešovice","lat":50.321,"lng":13.973,"count":1,"min_year":null,"max_year":null,"people":["Marie Rubešová"],"surnames":["Rubešová"]},{"id":"pohnanec12","name":"Pohnanec12","lat":49.351,"lng":17.319,"count":1,"min_year":1812,"max_year":1812,"people":["Petronilla Vandrovcová"],"surnames":["Vandrovcová"]},{"id":"nov__horka","name":"Nová Horka","lat":49.668,"lng":18.151,"count":1,"min_year":1890,"max_year":1890,"people":["Július Svačina"],"surnames":["Svačina"]},{"id":"_ebice","name":"Žebice","lat":49.87,"lng":13.53,"count":1,"min_year":1600,"max_year":1600,"people":["Magdalena Bláhová"],"surnames":["Bláhová"]},{"id":"albrechtice__jeze__","name":"Albrechtice, Jezeří","lat":50.533,"lng":13.493,"count":1,"min_year":1771,"max_year":1771,"people":["Anna Maria Richter"],"surnames":["Richter"]},{"id":"radlice__barchovice__okres_kol_n___esk__republika","name":"Radlice, Barchovice, okres Kolín, Česká republika","lat":50.045,"lng":14.956,"count":1,"min_year":1711,"max_year":1711,"people":["Marie Magdalena Šmejkal"],"surnames":["Šmejkal"]},{"id":"ostrava_kun_ice__velk__kun_ice","name":"Ostrava-Kunčice, Velké Kunčice","lat":49.775,"lng":18.353,"count":1,"min_year":1857,"max_year":1857,"people":["Antonie Borovcová"],"surnames":["Borovcová"]},{"id":"libichov_bilichov","name":"Libichov/Bilichov","lat":50.271,"lng":14.055,"count":1,"min_year":null,"max_year":null,"people":["Jan Holub"],"surnames":["Holub"]},{"id":"charv_tce","name":"Charvátce","lat":50.412,"lng":14.121,"count":1,"min_year":1881,"max_year":1881,"people":["Anna Holubová"],"surnames":["Holubová"]},{"id":"m_stek","name":"Místek","lat":49.693,"lng":18.35,"count":1,"min_year":1704,"max_year":1704,"people":["Joannes Uhlarz"],"surnames":["Uhlarz"]},{"id":"m___tky","name":"Měřůtky","lat":49.367,"lng":17.219,"count":1,"min_year":1757,"max_year":1757,"people":["Jakub Hlaváč"],"surnames":["Hlaváč"]},{"id":"konojedy","name":"Konojedy","lat":50.061,"lng":14.825,"count":1,"min_year":null,"max_year":null,"people":["Alžběta Piwoňka"],"surnames":["Piwoňka"]},{"id":"hryzely","name":"Hryzely","lat":49.655,"lng":14.751,"count":1,"min_year":1774,"max_year":1774,"people":["Anna"],"surnames":["Anna"]},{"id":"je_etice","name":"Ješetice","lat":49.71,"lng":14.816,"count":1,"min_year":1779,"max_year":1779,"people":["Anna Křemen"],"surnames":["Křemen"]},{"id":"vrbi_any","name":"Vrbičany","lat":50.415,"lng":14.148,"count":1,"min_year":1777,"max_year":1777,"people":["Georgius Hájek"],"surnames":["Hájek"]},{"id":"oko_","name":"Okoř","lat":50.175,"lng":14.207,"count":1,"min_year":null,"max_year":null,"people":["Jakub Císař"],"surnames":["Císař"]},{"id":"chr_ov","name":"Chržov","lat":50.356,"lng":13.858,"count":1,"min_year":null,"max_year":null,"people":["František Vierekl"],"surnames":["Vierekl"]},{"id":"vlk_n_ice","name":"Vlkánčice","lat":49.857,"lng":14.761,"count":1,"min_year":1841,"max_year":1841,"people":["Barbora Nováková"],"surnames":["Nováková"]},{"id":"ole_n_","name":"Olešná","lat":49.905,"lng":14.205,"count":1,"min_year":null,"max_year":null,"people":["Václav Rezek"],"surnames":["Rezek"]},{"id":"lib_chov","name":"Liběchov","lat":50.399,"lng":14.499,"count":1,"min_year":1748,"max_year":1748,"people":["Lidmila Hoškova"],"surnames":["Hoškova"]},{"id":"budyn___pak_slan_","name":"Budyně, pak Slaný","lat":50.332,"lng":14.175,"count":1,"min_year":1857,"max_year":1857,"people":["Alžběta Novotná"],"surnames":["Novotná"]},{"id":"tismice","name":"Tismice","lat":50.018,"lng":14.898,"count":1,"min_year":1858,"max_year":1858,"people":["Alžběta Hlaváčková"],"surnames":["Hlaváčková"]},{"id":"vysk__libe___m_lnick__vtelno","name":"Vyská Libeň, Mělnické Vtelno","lat":50.399,"lng":14.388,"count":1,"min_year":null,"max_year":null,"people":["Eva Vrbová"],"surnames":["Vrbová"]},{"id":"sk_ly_telce","name":"Skály Telce","lat":50.278,"lng":13.952,"count":1,"min_year":1828,"max_year":1828,"people":["Josef Zázvorka"],"surnames":["Zázvorka"]},{"id":"moravany","name":"Moravany","lat":49.187,"lng":16.65,"count":1,"min_year":1916,"max_year":1916,"people":["Marie Holubová"],"surnames":["Holubová"]},{"id":"trav_ice","name":"Travčice","lat":50.421,"lng":14.061,"count":1,"min_year":null,"max_year":null,"people":["Jan Huja"],"surnames":["Huja"]},{"id":"ostrava_kun_i_ky__klein_kunczic_","name":"Ostrava-Kunčičky (Klein Kunczic)","lat":49.817,"lng":18.26,"count":1,"min_year":1833,"max_year":1833,"people":["Johanna Pecuchová"],"surnames":["Pecuchová"]},{"id":"oplany__kostelec_nad__ern_mi_lesy","name":"Oplany, Kostelec nad Černými lesy","lat":49.965,"lng":14.712,"count":1,"min_year":1660,"max_year":1660,"people":["Václav Hejtmánek"],"surnames":["Hejtmánek"]},{"id":"st___kov","name":"Střížkov","lat":49.736,"lng":14.833,"count":1,"min_year":1866,"max_year":1866,"people":["Josef Pohořelý"],"surnames":["Pohořelý"]},{"id":"drab_ice","name":"Drabšice","lat":50.431,"lng":14.141,"count":1,"min_year":1811,"max_year":1811,"people":["Antonín Huja"],"surnames":["Huja"]},{"id":"zechov","name":"Zechov","lat":49.776,"lng":14.825,"count":1,"min_year":null,"max_year":null,"people":["Františka Beránková"],"surnames":["Beránková"]},{"id":"b_e_any","name":"Břežany","lat":50.341,"lng":13.987,"count":1,"min_year":1809,"max_year":1809,"people":["Anna Hrušková"],"surnames":["Hrušková"]},{"id":"ostravice","name":"Ostravice","lat":49.571,"lng":18.234,"count":1,"min_year":1872,"max_year":1872,"people":["Jan Uhlář"],"surnames":["Uhlář"]},{"id":"_ev_t_n","name":"Ševětín","lat":49.222,"lng":14.583,"count":1,"min_year":1849,"max_year":1849,"people":["František Xaver Macháček"],"surnames":["Macháček"]},{"id":"pozde_","name":"Pozdeň","lat":50.293,"lng":13.989,"count":1,"min_year":null,"max_year":null,"people":["Barbora Bendová"],"surnames":["Bendová"]},{"id":"mlad__vo_ice","name":"Mladá Vožice","lat":49.546,"lng":14.804,"count":1,"min_year":null,"max_year":null,"people":["Anna Macháčková"],"surnames":["Macháčková"]},{"id":"konopi_t_","name":"Konopiště","lat":49.777,"lng":14.663,"count":1,"min_year":1842,"max_year":1842,"people":["Elisabeth Sofia Wilhelmina Kählig"],"surnames":["Kählig"]},{"id":"dr___any","name":"Drážďany","lat":51.0504,"lng":13.7373,"count":1,"min_year":1766,"max_year":1766,"people":["Maria Anna Henriette Hedwig Borchert"],"surnames":["Borchert"]},{"id":"zv_novice","name":"Zvánovice","lat":49.897,"lng":14.714,"count":1,"min_year":1753,"max_year":1753,"people":["Anna Povejšilová"],"surnames":["Povejšilová"]},{"id":"ob_dkovice","name":"Obědkovice","lat":49.349,"lng":17.199,"count":1,"min_year":1856,"max_year":1856,"people":["Marianna Novotná"],"surnames":["Novotná"]}]

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
            <HStat><HStatNum>5 000</HStatNum><HStatLbl>předků</HStatLbl></HStat>
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
