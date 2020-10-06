import React from "react";
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NotFoundPage from './NotFoundPage'
import Topics from './Topics'

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Topics</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={Home} />
        <Route path="/about" render={({ match }) => <About />} />
        <Route path="/articles" render={Topics} />

        {/* <Route path="/topics" exact component={Topics} />
        <Route path="/topics/:topicId" exact component={Topic} />
        <Route path="/topics/:topicId/info" component={TopicInfo} />
        <Route path="/topics/:topicId/about" component={About} /> */}

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
