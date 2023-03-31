import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="bar">
    <nav className="navbar">
      <h1>Bookstore Ikoote</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
