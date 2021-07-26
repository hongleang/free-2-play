import React from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return ( 
    <div className={styles.navbar}>
      <img className={styles.navbar__img} src="src/assets/images/logo.png" alt="" />
      <img className={styles.navabar__hamburger} src="src/assets/images/icon-hamburger.svg" alt="" />
      
      <ul className={styles.dropdown}>
        <li className={styles.dropdown__item}><a href="#">Home</a></li>
        <li className={styles.dropdown__item}><a href="#">Top games list</a></li>
        <li className={styles.dropdown__item}><a href="#">Sign in</a></li>
        <li className={styles.dropdown__item}><a href="#">Sign up</a></li>
      </ul>
    </div> 
  );
}
 
export default Navbar;