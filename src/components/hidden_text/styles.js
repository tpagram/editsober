import styled from "styled-components"

export const Word = styled.span.attrs({
  spellCheck: false
})`
  color: ${props => props.theme.foreground};
  background: ${props => props.theme.foreground};
  border-radius: 4px;
  // padding: 0 5px;
`

export const Whitespace = styled.span`
  background: ${props => props.theme.background};
`

export const VisibleText = styled.span`
  // readonly: false;
  user-select: text;
`