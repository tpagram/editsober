import React, { Component } from "react"
import { Whitespace, Word } from "./styles"

class HiddenText extends Component {
  formatText = text => {
    return text.map((word, i) => {
      if (/ |\n/.test(word)) {
        return <Whitespace key={i}>{word}</Whitespace>
      } else {
        return <Word key={i}>{word}</Word>
      }
    })
  }

  render() {
    return this.props.visible
      ? this.props.text
      : this.formatText(this.props.text)
  }
}

export default HiddenText
