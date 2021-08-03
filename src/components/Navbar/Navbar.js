import "./Navbar.scss";
import "./Toggle.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="/">
        F2P <i class="fas fa-dice"></i> GAMES
      </a>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            New Release Games
          </a>
        </li>
        <li className="navbar__item">
          <a href="/topgames" className="navbar__link">
            Top Games
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
