import styled from "styled-components"
import moon from "react-icons/lib/fa/moon-o"
import sun from "react-icons/lib/fa/sun-o"
import eye from "react-icons/lib/fa/eye"
import pencil from "react-icons/lib/fa/pencil"

export const FooterWrapper = styled.div`
  flex: 1 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  border: none;
  outline: none;

  transform: perspective(1px) translateZ(0);
  transition: transform 0.3s;
  &:hover {
    color: ${props => props.theme.accent};
    transform: scale(1.2);
  }
  &:active {
    transform: rotate(180deg);
  }
`

export const WordCount = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 40px;
  margin: 0 30px;
  background-color: ${props => props.theme.background};
  font-family: 'Courgette', cursive;
`

export const Moon = styled(moon)`
  width: 100%;
  height: 100%;
`

export const Sun = styled(sun)`
  width: 100%;
  height: 100%;
`

export const Eye = styled(eye)`
  width: 100%;
  height: 100%;
`

export const Pencil = styled(pencil)`
  width: 100%;
  height: 100%;
`