import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticated, getUser } from '../../redux/selectors';
import Navbar from '../Navbar/Navbar';
import UserProfile from '../UserProfile/UserProfile';
import AppNav from '../AppNav/AppNav';
import s from './Header.module.css';
import { signOut } from '../../redux/operations';

const Header = ({ isAuthenticated, user, onSignOut }) => (
  <header className={s.header}>
    <AppNav isAuthenticated={isAuthenticated} />
    {isAuthenticated ? <UserProfile onSignOut={onSignOut} user={user} /> : <Navbar />}
  </header>
);

const MSTP = state => ({
  isAuthenticated: isAuthenticated(state),
  user: getUser(state)
});

const MDTP = {
  onSignOut: signOut
};

export default connect(
  MSTP,
  MDTP
)(Header);
