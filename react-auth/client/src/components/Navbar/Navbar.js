import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => (
  <nav className={s.navbar}>
    <ul className={s.list}>
      <li>Sign In</li>
      <li>Sign Up</li>
    </ul>
  </nav>
)

export default Navbar;
