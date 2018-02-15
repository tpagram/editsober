import React, { Component } from "react"
import { withTheme } from "styled-components"
import { FooterWrapper, FooterButton, WordCount, Moon, Sun, Pencil, Eye} from "./styles"

class Footer extends Component {
  constructor() {
    super()
    this.icons = { moon: Moon, sun: Sun }
  }

  render() {
    let ThemeIcon = this.icons[this.props.theme.icon]
    return (
      <FooterWrapper>
        <FooterButton onClick={this.props.toggleVisible}>
          {this.props.visible ? <Pencil /> : <Eye />}
        </FooterButton>
        <WordCount>
          {this.props.wordCount}
        </WordCount>
        <FooterButton onClick={this.props.toggleTheme}>
          <ThemeIcon />
        </FooterButton>
      </FooterWrapper>
    )
  }
}

export default withTheme(Footer)
