import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className={s.navbar}>
    <ul className={s.list}>
      <li>
        <NavLink to='/signin'>Sign In </NavLink>
      </li>
      <li>
        <NavLink to='/signup'>Sign Up </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
