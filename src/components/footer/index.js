import React, { Component } from "react"
import { withTheme } from "styled-components"
import { FooterWrapper, ThemeButton, WordCount, VisibleButton, Moon, Sun, Pencil, Eye} from "./styles"

class Footer extends Component {
  constructor() {
    super()
    this.icons = { moon: Moon, sun: Sun }
  }

  render() {
    let ThemeIcon = this.icons[this.props.theme.icon]
    return (
      <FooterWrapper>
        <VisibleButton onClick={this.props.toggleVisible}>
          {this.props.visible ? <Pencil /> : <Eye />}
        </VisibleButton>
        <WordCount>
          {this.props.wordCount}
        </WordCount>
        <ThemeButton onClick={this.props.toggleTheme}>
          <ThemeIcon />
        </ThemeButton>
      </FooterWrapper>
    )
  }
}

export default withTheme(Footer)
