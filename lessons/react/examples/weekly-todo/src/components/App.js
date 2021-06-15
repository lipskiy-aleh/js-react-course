import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd'
import { WeeklyTodo } from './WeeklyTodo'
import { NotFound } from './NotFound'
import { Users } from './Users'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Logo } from './Logo'

import { StyledHeader } from './Styled'

const { Footer, Content } = Layout

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
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
            <Content>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/about" render={(props) => <About {...props} />} />
                <Route path="/week" component={WeeklyTodo} />
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer> Footer </Footer>
          </Layout>
        </Router>
      </ThemeProvider>
    )
  }
}


function Home(props) {
  return <Redirect to="/week" />;
}

function About({ someData }) {
  return <h2>About {someData}</h2>;
}

export default App
