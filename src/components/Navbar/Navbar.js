import React from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return ( 
    <div className={styles.navbar}>
      <a href="#">Logo</a>
      <div className={styles.dropdown}>
        <ul className={styles.dropdown__items}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Games List</a></li>
          <li><a href="#">Sign in / Sign up</a></li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;