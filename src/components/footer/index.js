import React, { Component } from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
`

const VisibleButton = styled.button`
  height:30px;
  width:40px;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <VisibleButton onClick={this.props.onClick} />
      </FooterWrapper>
    )
  }
}

export default Footer
