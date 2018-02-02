import React, { Component } from "react"
import {TextWrapper, CurrentWord, Cursor } from "./styles"
import HiddenText from "../hidden_text"

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
    this.cursor.focus()
  }

  handleCharacter = (isNewWord, character) => {
    const { text, currentWord, isTypingWhitespace } = this.state
    if (isNewWord) {
      if (isTypingWhitespace) { this.props.incrementWordCount() }
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
