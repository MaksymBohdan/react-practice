import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.module.css';
import SignInPage from '../Signin/SignInPage';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';

import { refreshCurrentUser } from '../../redux/operations';
import About from '../About.js/About';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <ProtectedRoute path='/' exact component={Home} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/profile' component={Profile} />

          <Route path='/about' component={About} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </>
    );
  }
}

const MDTP = {
  refreshCurrentUser: refreshCurrentUser
};

export default connect(
  null,
  MDTP
)(App);
