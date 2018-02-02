import styled, { injectGlobal } from "styled-components"

injectGlobal`
  body {
    margin: 0;
  }
`
export const lightTheme = {
  background: "white",
  foreground: "black",
  icon: "moon"
}

export const darkTheme = {
  background: "black",
  foreground: "white",
  icon: "sun"
}

export const Background = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 9fr 1fr;
  word-wrap: break-word;
  overflow-wrap: break-word;
`