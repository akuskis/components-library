// @flow

import { Input, Button } from '@material-ui/core';
import React, { Component } from 'react';

import './signIn.css';

type Props = {
  onSignIn: Function
};

type State = {
  login: string,
  password: string
};

type EventType = {
  target: {
    name: string,
    value: string
  }
};

class SignIn extends Component<Props, State> {
  state = { login: '', password: '' };

  handleChange = (event: EventType) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSignIn = () => {
    const { onSignIn } = this.props;

    onSignIn(this.state);
  };

  render() {
    const { login, password } = this.state;

    return (
      <div className="sign-in">
        <Input
          name="login"
          placeholder="login"
          onChange={this.handleChange}
          value={login}
          style={{ width: '100%' }}
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          onChange={this.handleChange}
          value={password}
          style={{ width: '100%' }}
        />
        <Button name="submit" style={{ width: '50%' }} onClick={this.handleSignIn}>
          ENTER
        </Button>
      </div>
    );
  }
}

export default SignIn;
