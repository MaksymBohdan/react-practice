import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    componentDidMount() {
      console.log(this.props.isAuthenticated);
      this.checkAuth();
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('aaa');
      if (prevProps.isAuthenticated !== this.props.isAuthenticated) this.checkAuth();
    }

    checkAuth = () => {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin');
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const MSTP = state => ({
    isAuthenticated: isAuthenticated(state)
  });

  return connect(MSTP)(WithAuth);
};

export default withAuth;
