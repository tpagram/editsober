import styled, { injectGlobal } from "styled-components"

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans');
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
export const lightTheme = {
  background: "white",
  foreground: "#21252b",
  accent: "#21252b",
  icon: "moon"
}

export const darkTheme = {
  background: '#21252b',
  foreground: "white",
  accent: "white",
  icon: "sun"
}

export const Background = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;

  word-wrap: break-word;
  overflow-wrap: break-word;
  text-rendering: optimizeLegibility;
  font-size: 16px;
  line-height: 1.8;
  font-family: "Open Sans";

  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  flex: 1 0 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.accent};
  font-size: 32px;
  font-family: 'Courgette', cursive;
`