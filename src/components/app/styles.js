import styled, { injectGlobal } from "styled-components"

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans');
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
  background: '#191c1d',
  foreground: "white",
  accent: "#F8B147",
  // accent: "white",
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
  text-rendering: optimizeLegibility;
  font-size: 16px;
  line-height: 1.8;
  font-family: "Open Sans";
`

export const Header = styled.div`
  color: ${props => props.theme.accent};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column:  2 / 3;
  grid-row: 0 / 1;
  font-family: 'Courgette', cursive;
`