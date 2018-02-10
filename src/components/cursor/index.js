import React from "react"
import { CursorSpan } from "./styles"

export default class Cursor extends React.Component {
  render() {
    var { reference } = this.props

    return (
      <CursorSpan
        innerRef={input => {
          reference(input)
        }}
        contentEditable="true"
      />
    )
  }
}
