import styled from "styled-components"

export const Word = styled.span.attrs({
  spellCheck: false
})`
  color: ${props => props.theme.foreground};
  background: ${props => props.theme.foreground};
  border-radius: 4px;
`

export const Whitespace = styled.span`
  background: ${props => props.theme.background};
`

export const VisibleText = styled.span`
  user-select: text;
`
