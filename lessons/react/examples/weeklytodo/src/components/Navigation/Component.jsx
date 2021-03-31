import {
  Link
} from 'react-router-dom'
import './style.css'

export function Navigation({ routes }) {
  return (
    <nav className="navigation">
      <ul>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
