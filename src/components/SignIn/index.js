// @flow

import { Input } from '@material-ui/core';
import React, { Component } from 'react';

import SignInButton from './SignInButton';
import './signIn.css';

type Props = {
  logoPath?: string,
  onSignIn: Function
};

type State = {
  login: string,
  password: string
};

class SignIn extends Component<Props, State> {
  static defaultProps = { logoPath: undefined };

  state = { login: '', password: '' };

  handleChange = (event: { target: { name: string, value: string } }) => {
    const {
      target: { name, value }
    } = event;

    this.setState({ [name]: value });
  };

  handleSignIn = () => {
    const { login, password } = this.state;
    const { onSignIn } = this.props;

    onSignIn(login, password);
  };

  render() {
    const { logoPath } = this.props;
    const { login, password } = this.state;

    return (
      <div className="sign-in">
        {logoPath ? <img className="sign-in__logo" src={logoPath} alt="sign in" /> : null}
        <Input name="login" className="sign-in__input" placeholder="login" onChange={this.handleChange} value={login} />
        <Input
          name="password"
          className="sign-in__input"
          placeholder="password"
          type="password"
          onChange={this.handleChange}
          value={password}
        />
        <div className="sign-in__button">
          <SignInButton onClick={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default SignIn;
