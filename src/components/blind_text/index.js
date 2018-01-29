import React, { Component } from "react"
import styled from "styled-components"
import ContentEditable from "../content_editable"

const TextWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: white;
  max-width: 100%;
  overflow: auto;
  background: white;
  readonly: true;
  user-select: none;
  white-space: pre-wrap;
`
const HiddenText = styled.span`
  color: black;
  background: black;
  border-radius: 5px;
`

const CurrentWord = styled.span`
  color: black;
  readonly: false;
  user-select: text;
  outline: none;
`

const Cursor = styled(ContentEditable)`
  color: black;
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

  handlePress = event => {
    const { text, currentWord } = this.state
    event.preventDefault()
    console.log(event.key)
    console.log("currentWord is " + currentWord)
    console.log("text is " + text)
    switch (event.key) {
      case " ":
      console.log("what")
        if (text === "" || /.*\n/.test(text)) {
          this.setState({ text: `${text}${currentWord} `, currentWord: "" })
        } else {
          this.setState({ text: `${text} ${currentWord} `, currentWord: "" })
        }
        break
      case "Enter":
        this.setState({ text: `${text}${currentWord}\n`, currentWord: "" })
        break
      case "Backspace":
      case "Delete":
        this.setState({ currentWord: currentWord.slice(0, -1) })
        break
      default:
        if (event.key.length === 1) {
          this.setState({ currentWord: currentWord + event.key })
        }
    }
  }

  focus = () => {
    this.cursor.focus()
  }

  render() {
    return (
      <TextWrapper onClick={this.focus}>
        <HiddenText
          dangerouslySetInnerHTML={{ __html: this.state.text }}
          spellcheck="false"
        />
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
