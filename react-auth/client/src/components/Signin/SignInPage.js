import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { isAuthenticated } from '../../redux/selectors';
import Signin from './Signin';
import withAuthRedirect from '../hoc/withAuthRedirect';

class SignInPage extends Component {
  render() {
    return <Signin />;
  }
}

// const MSTP = function(state) {
//   return {
//     isAuthenticated: isAuthenticated(state)
//   };
// };

export default withAuthRedirect(SignInPage);
