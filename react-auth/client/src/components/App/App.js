import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.module.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';

import { refreshCurrentUser } from '../../redux/operations';

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <>
        <Header />

        <Switch>
          <Route path='/' exact render={() => <h1>MAIN</h1>} />
          <Route path='/signin' component={Signin} />
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
