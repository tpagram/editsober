import React, { Component } from "react"
import styled, { withTheme } from "styled-components"
import moon from "react-icons/lib/fa/moon-o"
import sun from "react-icons/lib/fa/sun-o"
import eye from "react-icons/lib/fa/eye"
import pencil from "react-icons/lib/fa/pencil"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
`

const VisibleButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.background};
  border: none;
  outline: none;
`

const ThemeButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.background};
  border: none;
  outline: none;
`

const WordCount = styled.div`
  width: 60px;
  height: 60px;
  color: ${props => props.theme.foreground};
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
`

const Moon = styled(moon)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.foreground};
`

const Sun = styled(sun)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.foreground};
`

const Eye = styled(eye)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.foreground};
`

const Pencil = styled(pencil)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.foreground};
`

class Footer extends Component {
  constructor() {
    super()
    this.icons = { moon: Moon, sun: Sun }
  }

  render() {
    let ThemeIcon = this.icons[this.props.theme.icon]
    return (
      <FooterWrapper>
        <ThemeButton onClick={this.props.toggleTheme}>
          <ThemeIcon />
        </ThemeButton>
        <WordCount>
          {this.props.wordCount}
        </WordCount>
        <VisibleButton onClick={this.props.toggleVisible}>
          {this.props.visible ? <Pencil /> : <Eye />}
        </VisibleButton>
      </FooterWrapper>
    )
  }
}

export default withTheme(Footer)
