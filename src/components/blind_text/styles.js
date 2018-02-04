import styled from "styled-components"
import ContentEditable from "../content_editable"

export const TextWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  max-width: 100%;
  overflow: auto;
  readonly: true;
  user-select: none;
  white-space: pre-wrap;
  outline: none;
`

export const CurrentWord = styled.span`
  outline: none;
`

export const Cursor = styled(ContentEditable)`
  color: ${props => props.theme.foreground};
  readonly: false;
  user-select: text;
  outline: none;
  border: none;
`