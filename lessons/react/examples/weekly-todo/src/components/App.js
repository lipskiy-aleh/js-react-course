import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout } from 'antd'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { Header } from './Header'
import { Footer } from './Footer'


// import { Container as Todos } from '../modules/todos'
// import { Container as Users } from '../modules/users'

import { Page as AboutPg } from '../pages/About'
import { Page as HomePg } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

import { makeAsync } from './AsyncComponent'

const Users = makeAsync(() => import('../modules/users'), 'Container')
const Todos = makeAsync(() => import('../modules/todos'), 'Container')

const { Content } = Layout



class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route path="/" exact component={HomePg} />
                <Route path="/users" component={Users} />
                <Route path="/about" render={(props) => <AboutPg {...props} />} />
                <Route path="/week" component={Todos} />
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
