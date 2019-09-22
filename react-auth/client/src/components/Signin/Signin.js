import React, { Component } from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import Label from '../common/Label';
import { connect } from 'react-redux';
import { signIn } from '../../redux/operations';

class Signin extends Component {
  state = {
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
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text='Email'>
          <Input value={email} type='text' placeholder='example@mail.com' name='email' onChange={this.handleChange} />
        </Label>
        <Label text='Password'>
          <Input value={password} type='password' placeholder='password' name='password' onChange={this.handleChange} />
        </Label>
        <Button text='Sign in' type='submit' />
      </Form>
    );
  }
}

const MDTP = {
  onSubmit: signIn
};

export default connect(
  null,
  MDTP
)(Signin);
