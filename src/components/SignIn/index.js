// @flow

import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

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

  handleSignIn = (event: SyntheticEvent<HTMLFormElement>) => {
    const { onSignIn } = this.props;

    onSignIn({ ...this.state });

    event.preventDefault();
  };

  render() {
    const { login, password } = this.state;

    return (
      <form className="sign-in" onSubmit={this.handleSignIn} onChange={this.handleChange}>
        <Input
          name="login"
          placeholder="login"
          value={login}
          style={{ width: '100%' }}
          autoComplete="off"
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          style={{ width: '100%' }}
        />
        <Button name="submit" type="submit" style={{ width: '175px' }}>
          ENTER
        </Button>
      </form>
    );
  }
}

export default SignIn;
