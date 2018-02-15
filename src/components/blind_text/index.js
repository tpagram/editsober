import React, { Component } from "react"
import { Content, TextWrapper, CurrentWord } from "./styles"
import HiddenText from "../hidden_text"
import Cursor from "../cursor"

class BlindText extends Component {
  constructor() {
    super()
    this.state = {
      text: [],
      currentWord: "",
      isTypingWhitespace: true
    }
  }

  componentDidMount() {
    this.focus()
  }

  focus = () => {
    if (!this.props.visible) {
      this.cursor.focus()
    }
  }

  scroll = () => {
    this.cursor.scrollIntoView({ behavior: "smooth" })
  }

  handleCharacter = (isNewWord, character) => {
    const { text, currentWord, isTypingWhitespace } = this.state
    if (isNewWord) {
      if (isTypingWhitespace) {
        this.props.incrementWordCount()
      }
      this.setState({
        text: [...text, currentWord],
        isTypingWhitespace: !isTypingWhitespace,
        currentWord: character
      })
    } else {
      this.setState({ currentWord: currentWord + character })
    }
  }

  handlePress = event => {
    const { currentWord, isTypingWhitespace } = this.state
    event.preventDefault()
    switch (event.key) {
      case " ":
        this.handleCharacter(!isTypingWhitespace, " ")
        break
      case "Enter":
        this.handleCharacter(!isTypingWhitespace, "\n")
        break
      case "Backspace":
      case "Delete":
        this.setState({ currentWord: currentWord.slice(0, -1) })
        break
      default:
        if (event.key.length === 1) {
          this.handleCharacter(isTypingWhitespace, event.key)
        }
    }
    this.scroll()
  }

  render() {
    return (
      <Content tabIndex="1" onKeyDown={this.handlePress} onClick={this.focus}>
        <TextWrapper>
          <HiddenText text={this.state.text} visible={this.props.visible} />
          <CurrentWord>{this.state.currentWord}</CurrentWord>
          <Cursor
            reference={input => {
              this.cursor = input
            }}
          />
        </TextWrapper>
      </Content>
    )
  }
}

export default BlindText
