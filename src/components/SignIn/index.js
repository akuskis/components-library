// @flow

import { Button, Input } from '@material-ui/core';
import React, { Component } from 'react';

import './signIn.css';

type Props = {
  logo?: string,
  onSignIn: Function
};

type State = {
  login: string,
  password: string
};

class SignIn extends Component<Props, State> {
  static defaultProps = { logo: undefined };

  state = { login: '', password: '' };

  handleChange = (event: { target: { name: string, value: string } }) => {
    const {
      target: { name, value }
    } = event;

    this.setState({
      [name]: value
    });
  };

  handleSignIn = () => {
    const { login, password } = this.state;
    const { onSignIn } = this.props;

    onSignIn(login, password);
  };

  render() {
    const { logo } = this.props;
    const { login, password } = this.state;

    return (
      <div className="sign-in">
        <div className="sign-in__logo">{logo ? <img src={logo} alt="sign in" /> : null}</div>
        <Input name="login" className="sign-in__login" placeholder="login" onChange={this.handleChange} value={login} />
        <Input
          name="password"
          className="sign-in__password"
          placeholder="password"
          type="password"
          onChange={this.handleChange}
          value={password}
        />
        <Button name="submit" className="sign-in__submit" onClick={this.handleSignIn}>
          ENTER
        </Button>
      </div>
    );
  }
}

export default SignIn;
