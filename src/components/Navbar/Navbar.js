import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    //Add responsiveness to button
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return ( 
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to='/' className="navbar__logo">
            F2Play
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "navbar__menu active": "navbar__menu"}>
            <li className="navbar__item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/TopGames" className="nav-links" onClick={closeMobileMenu}>
                Top Games
              </Link>
              <Link to="/register-form" className="nav-links" onClick={closeMobileMenu}>
                Sign in / Sign up
              </Link>
            </li>
          </ul>
          {/* Render Button if button is true */}
          {button && <Button></Button>}
        </div>
      </nav>
    </div>
  );
}
 
export default Navbar;