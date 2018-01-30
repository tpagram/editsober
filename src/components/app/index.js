import React, { Component } from "react"
import styled, { injectGlobal } from "styled-components"
import BlindText from "../blind_text"
import Footer from "../footer"

injectGlobal`
  body {
    margin: 0;
  }
`

const Background = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 9fr 1fr;
  word-wrap: break-word;
  overflow-wrap: break-word;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  setVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <Background>
        <BlindText visible={this.state.visible} />
        <Footer onClick={this.setVisible} />
      </Background>
    )
  }
}

export default App
