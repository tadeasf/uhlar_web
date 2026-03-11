import React from "react"
import { GlobalStyle } from "../../styles/GlobalStyles"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`

const RodMap = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MapFrame
          src="/rod/mapa.html"
          title="Interaktivní mapa rodů Uhlář a příbuzných"
          loading="lazy"
        />
      </Wrapper>
    </>
  )
}

export default RodMap
