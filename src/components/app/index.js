import React, { Component } from "react"
import styled, { injectGlobal } from "styled-components"
import BlindText from "../blind_text"

injectGlobal`
  body {
    margin: 0;
  }
`

const Background = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 9fr 1fr;
  word-wrap: break-word;
  overflow-wrap: break-word;
`

class App extends Component {
  render() {
    return (
      <Background>
        <BlindText />
      </Background>
    )
  }
}

export default App
