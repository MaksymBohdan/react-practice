import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const styles = {
    activeLink: {
      color: 'red',
      textDecoration: 'none'
    }
  };
  
  return (
    <ul>
      <li>
        <NavLink exact activeStyle={styles.activeLink} to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={styles.activeLink} to='/articles'>
          Aritcles
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={styles.activeLink} to='/about'>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
