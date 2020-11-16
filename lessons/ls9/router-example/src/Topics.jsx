import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

export default function Topics(props) {
  const { match } = props

  return (
    <div style={{ backgroundColor: 'red' }}>
      <Switch>
        <Route path={match.url} exact component={List} />
        <Route path={`${match.url}/:topicId`} component={Topic} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

function List(props) {
  return (
    <div>
      <h2>Topics list</h2>
      <Link to="/articles/test"> Test topic </Link>
    </div>
  );
}

function Topic(props) {
  console.log('-----')
  console.log(props.match.path)
  console.log(props.match.url)
  console.log('-----')

  return (
    <div>
      <h2>Topic {props.match.params.topicId}</h2>
      <TopicInfo />
    </div>
  );
}

function TopicInfo(props) {
  return <h2>Topic info</h2>;
}