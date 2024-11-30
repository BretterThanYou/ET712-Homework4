import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Immortality">An overview on biological immortality</Link></li>
        <li><Link to="/OldTortoise">Learn about the oldest living land animal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
