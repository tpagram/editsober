import React, { Component } from "react"
import styled from "styled-components"
import ContentEditable from "../content_editable"
import HiddenText from "../hidden_text"

const TextWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  max-width: 100%;
  overflow: auto;
  readonly: true;
  user-select: none;
  white-space: pre-wrap;
  // font-size: 18px;
  outline: none;
`

const CurrentWord = styled.span`
  outline: none;
`

const Cursor = styled(ContentEditable)`
  color: ${props => props.theme.foreground};
  readonly: false;
  user-select: text;
  outline: none;
  border: none;
`

class BlindText extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      currentWord: ""
    }
  }

  componentDidMount() {
    this.focus()
  }

  focus = () => {
    this.cursor.focus()
  }

  handlePress = event => {
    const { text, currentWord } = this.state
    event.preventDefault()
    // console.log(event.key)
    // console.log(event.keyCode)
    // console.log(event.CharCode)
    // console.log(event.key)
    // console.log("currentWord is " + currentWord)
    // console.log("text is " + text)
    switch (event.key) {
      case " ":
        this.setState({ text: `${text}${currentWord} `, currentWord: "" })
        this.props.setWordCount(`${text}${currentWord} `)
        break
      case "Enter":
        this.setState({ text: `${text}${currentWord}\n`, currentWord: "" })
        this.props.setWordCount(`${text}${currentWord} `)
        break
      case "Backspace":
      case "Delete":
        console.log("wow")
        this.setState({ currentWord: currentWord.slice(0, -1) })
        break
      default:
        if (event.key.length === 1) {
          this.setState({ currentWord: currentWord + event.key })
        }
    }
  }

  render() {
    return (
      <TextWrapper onClick={this.focus}>
        <HiddenText text={this.state.text} visible={this.props.visible} />
        <CurrentWord
          dangerouslySetInnerHTML={{ __html: this.state.currentWord }}
          onKeyPress={this.handlePress}
        />
        <Cursor
          tagName="span"
          internalRef={input => {
            this.cursor = input
          }}
          onKeyDown={this.handlePress}
        />
      </TextWrapper>
    )
  }
}

export default BlindText
