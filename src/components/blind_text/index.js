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

const CurrentWord = styled(ContentEditable)`
  color: black;
  readonly: false;
  user-select: text;
  outline: none;
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

  handleChange = event => {
    let currentWord = event.target.value.replace(/&nbsp;/, " ")
    this.setState({ currentWord: currentWord })
    console.log("currentWord is:" + currentWord)
    console.log("last letter equals " + /\S+\s$/.test(currentWord))
    console.log("text is:" + this.state.text)
    if (/\S+\s$/.test(currentWord)) {
      this.setState({ currentWord: "" })
      this.setState({ text: this.state.text + currentWord })
    } else if (/\S+<br>$/.test(currentWord)) {
      this.setState({ currentWord: "" })
      this.setState({ text: this.state.text + currentWord.replace(/<br>$/, "") })
    }
  }

  focus = () => {
    this.currentWord.focus()
  }

  render() {
    return (
      <TextWrapper onClick={this.focus}>
        <HiddenText
          dangerouslySetInnerHTML={{ __html: this.state.text }}
          spellcheck="false"
        />
        <CurrentWord
          tagName="span"
          html={this.state.currentWord}
          onChange={this.handleChange}
          internalRef={input => {
            this.currentWord = input
          }}
        />
      </TextWrapper>
    )
  }
}

export default BlindText
