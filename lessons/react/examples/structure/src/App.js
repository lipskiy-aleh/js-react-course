import { Content, Header, Footer, Layout } from './layout';
import { LoginPg, SignupPg } from './pages'
import { TodoContainer } from './modules/Todo'



export function App() {
  return (
    <Layout>
      <Header>
        MY HEADER
      </Header>

      <Content>
        <Switch>
          <Router path="/login" component={LoginPg} />
          <Router path="/signup" component={SignupPg} />


          <Router path="/todo" component={TodoContainer} />
        </Switch>
      </Content>

      <Footer>
        MY FOOTER
      </Footer>
    </Layout>
  );
}

export default App