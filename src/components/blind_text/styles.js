import styled from "styled-components"

export const Content = styled.div`
  flex: 9 0 0;

  display: grid;
  grid-template-columns: 1fr 6fr 1fr;

  overflow-y: auto;
  outline: none;
`

export const TextWrapper = styled.div`
  grid-column: 2 / 3;

  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  outline: none;

  // readonly: true;
  user-select: none;
  white-space: pre-wrap;
`

export const CurrentWord = styled.span`
  outline: none;
`

// const blink = keyframes`
//   from, to {
//     opacity: 0;
//   }
//   50% {
//     opacity: 1;
//   }
// `
//
// export const Cursor = styled.span`
//   animation: ${blink} 1s step-end infinite;
// `
