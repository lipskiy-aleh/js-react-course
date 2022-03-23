import styled from 'styled-components'
import { Menu } from './Menu'
import { MenuItemWrapper } from './Menu/styled'

export const StyledMenu = styled(Menu).attrs({
  size: 'S'
})`
  background-color: yellow;

  ${MenuItemWrapper} {
    color: red;

    &:hover {
      color: blue;
    }
  }
`

// function styled(Cmp) {
//   return (props) =>  <Cmp {...props} className=""/>
// }