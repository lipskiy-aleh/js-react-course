import { Menu } from 'antd'
import {
  Link,
} from 'react-router-dom'
import { Logo } from './Logo'

import { StyledHeader } from './Styled'

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </ Menu.Item>
        <Menu.Item>
          <Link to="/about">About</Link>
        </ Menu.Item>
        <Menu.Item>
          <Link to="/users">Users</Link>
        </ Menu.Item>
        <Menu.Item>
          <Link to="/week">Week</Link>
        </ Menu.Item>

      </Menu>
    </StyledHeader>
  )
}