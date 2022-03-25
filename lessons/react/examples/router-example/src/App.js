import { Routes, Route, Link, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom'
import { parse } from 'query-string'
import { useEffect, useState, useContext } from 'react'
import { withSecure } from './withSecure'
import { LoginContext } from './LoginContext'

function Home() {
  return <h2>Home</h2>;
}

function Login({ login }) {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="">Topics List</Link>
        </li>
        <li>
          <Link to="page">Topics Page</Link>
        </li>
      </ul>

      <Routes>
        <Route index element={<SecureTopicsList />} />
        <Route path="about" element={<TopicsAbout />} />
        <Route path=":id" element={<SecureTopicPage />} />
      </Routes>
    </div>
  );
}

function TopicsList() {
  return <h2>TopicsList</h2>;
}

function TopicsAbout() {
  return <h2>Topics About</h2>;
}


function TopicPage() {
  const locationData = useLocation();
  const { id } = useParams();

  console.log('locationData', locationData)
  console.log('query', parse(locationData.search))
  console.log('params', id)

  return <h2>TopicPage</h2>;
}
const SecureTopicPage = withSecure(TopicPage)
const SecureTopicsList = withSecure(TopicsList)


function NotFound() {
  return <h2>Not Found</h2>;
}

const LOGGED_LOCAL_STORAGE_KEY = 'isUserLogged'

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem(LOGGED_LOCAL_STORAGE_KEY) === 'true')
  const navigate = useNavigate()

  const login = function () {
    setIsLogged(true);
    navigate('/')
  }

  useEffect(() => {
    localStorage.setItem(LOGGED_LOCAL_STORAGE_KEY, isLogged)
  }, [isLogged])

  // useEffect(() => {
  //   if (!isLogged) {
  //     navigate('/login')
  //   } else {
  //     navigate('/')
  //   }
  // }, [isLogged])

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics/about">Topics About</Link>
          </li>
          <li>
            <Link to="/topics/newTopic?isNew=1">New topic</Link>
          </li>
          <li>
            <Link to="/topics/page">Topics Page</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      <button onClick={() => setIsLogged(false)}>Logout</button>

      <LoginContext.Provider value={isLogged}>
        <Routes>

          {/* <Route path="/topics" element={<Topics />} />
          <Route path="/topics/list" element={<TopicsList />} />
          <Route path="/topics/:id" element={<TopicPage />} /> */}

          {/* <Route path="/topics" element={<Topics />}>
            <Route path="list" element={<TopicsList />} />
            <Route path=":id" element={<TopicPage />} />
          </Route> */}

          <Route path="/topics/*" element={<Topics />} />

          <Route path="/login" element={<Login login={login} />} />

          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
