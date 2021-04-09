import {
  Link
} from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header: HeaderAntd } = Layout

export function Header({ routes }) {
  return (
    <HeaderAntd>
        <Menu theme="dark" mode="horizontal">
          {routes.map(({ path, title }) => (
            <Menu.Item key={path}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
          ))}
        </Menu>
    </HeaderAntd>
  );
}
