import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navigation = () => (
  <div className="bar">
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link id="book" style={{ textDecoration: 'none', color: 'black' }} to="/">BOOKS</Link>
        </li>
        <li>
          <Link id="categ" style={{ textDecoration: 'none', color: 'black' }} to="categories">CATEGORIES</Link>
        </li>
      </ul>
      <span><IoIosPerson className="profile" /></span>
    </nav>
  </div>
);

export default Navigation;
