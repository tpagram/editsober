import React, { Component } from "react"
import styled, { injectGlobal, ThemeProvider } from "styled-components"
import BlindText from "../blind_text"
import Footer from "../footer"

injectGlobal`
  body {
    margin: 0;
  }
`
const lightTheme = {
  background: "white",
  foreground: "black",
  icon: "moon"
}

const darkTheme = {
  background: "black",
  foreground: "white",
  icon: "sun"
}

const Background = styled.div`
  background: ${props => props.theme.background};
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
      visible: false,
      theme: darkTheme,
      wordCount: 0
    }
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  toggleTheme = () => {
    if (this.state.theme === darkTheme) {
      this.setState({ theme: lightTheme })
    } else {
      this.setState({ theme: darkTheme })
    }
  }

  setWordCount = text => {
    this.setState({ wordCount: text.match(/\S+/g).length })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Background>
          <BlindText
            visible={this.state.visible}
            setWordCount={this.setWordCount}
          />
          <Footer
            toggleVisible={this.toggleVisible}
            toggleTheme={this.toggleTheme}
            visible={this.state.visible}
            wordCount={this.state.wordCount}
          />
        </Background>
      </ThemeProvider>
    )
  }
}

export default App
