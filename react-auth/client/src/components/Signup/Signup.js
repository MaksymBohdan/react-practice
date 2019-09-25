import React, { Component } from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import Label from '../common/Label';
import { connect } from 'react-redux';
import { signUp } from '../../redux/operations';
import withAuthRedirect from '../hoc/withAuthRedirect';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text='Name'>
          <Input value={name} type='text' placeholder='user name' name='name' onChange={this.handleChange} />
        </Label>
        <Label text='Email'>
          <Input value={email} type='text' placeholder='example@mail.com' name='email' onChange={this.handleChange} />
        </Label>
        <Label text='Password'>
          <Input value={password} type='password' placeholder='password' name='password' onChange={this.handleChange} />
        </Label>
        <Button text='Sign up' type='submit' />
      </Form>
    );
  }
}

const MDTP = {
  onSubmit: signUp
};

export default withAuthRedirect(
  connect(
    null,
    MDTP
  )(Signup)
);
