import { Link } from 'react-router-dom';

import "./Navbar.scss";
import "./Toggle.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        F2P <i class="fas fa-dice"></i> GAMES
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            New Release Games
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/topgames" className="navbar__link">
            Top Games
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
