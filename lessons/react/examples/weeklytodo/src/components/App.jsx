import {
  Switch,
  Route,
} from 'react-router-dom' 
import { Header } from './Header'
import { SecureRoute } from './SecureRoute';
import { Login } from './Login';
import { routes } from './routes'

import '../theme/index.less';
// import 'antd/dist/antd.less'; 

import { Layout } from 'antd'

export function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header routes={routes} />

      <Switch>
        {routes.map(({ path, component, isExact = false, isSecured = false }) => isSecured ? (
          <SecureRoute key={path} path={path} exact={isExact} component={component} />
        ) : (
          <Route key={path} path={path} exact={isExact} component={component} />
        ))}

        <Route path="/login" component={Login} />

        <Route render={() => <div>NOT FOUND PAGE</div>} />
      </Switch>
    </Layout>
  );
}