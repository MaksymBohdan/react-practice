import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors';

const withAuthRedirect = WrappedComponent => {
  class WithAuthRedirect extends Component {
    componentDidUpdate(prevProps, prevState) {
      if (this.props.isAuthenticated) {
        const { from } = this.props.location.state || { from: { pathname: '/' } };

        this.props.history.push(from);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const MSTP = state => ({
    isAuthenticated: isAuthenticated(state)
  });

  return connect(MSTP)(WithAuthRedirect);
};

export default withAuthRedirect;
