import styled from "styled-components"

export const Content = styled.div`
  flex: 9 0 0;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  @media only screen
    and (max-device-width: 480px)
    and (orientation: portrait) {
      grid-template-columns: 1fr 8fr 1fr;
  }

  overflow-y: auto;
  outline: none;
`

export const TextWrapper = styled.div`
  grid-column: 2 / 3;

  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  outline: none;

  user-select: none;
  white-space: pre-wrap;
`

export const CurrentWord = styled.span`
  outline: none;
`
