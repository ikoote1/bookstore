import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navigation = () => (
  <div className="bar">
    <nav className="navbar">
      <h1>Bookstore Ikoote</h1>
      <ul>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">BOOKS</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="categories">CATEGORIES</Link>
        </li>
      </ul>
      <span><IoIosPerson className="profile" /></span>
    </nav>
  </div>
);

export default Navigation;
