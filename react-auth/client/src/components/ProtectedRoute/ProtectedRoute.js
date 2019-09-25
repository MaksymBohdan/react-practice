import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors';

const ProtectedRoute = ({ component: Component, redirectTo = '/signin', isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Route {...props} />
        ) : (
          <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />
        )
      }
    />
  );
};

const MSTP = state => ({
  isAuthenticated: isAuthenticated(state)
});

export default connect(MSTP)(ProtectedRoute);
