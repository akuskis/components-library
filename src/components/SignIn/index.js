// @flow

import { Button, Input } from '@material-ui/core';
import React from 'react';

import './signIn.css';

type Props = {
  img: string,
  onSignIn: Function
};

const SignIn = ({ img, onSignIn }: Props) => (
  <div className="sign-in">
    <img className="sign-in__logo" src={img} alt="sign in" />
    <Input className="sign-in__login" placeholder="login" />
    <Input className="sign-in__password" placeholder="password" type="password" />
    <Button className="sign-in__submit" onClick={() => onSignIn('login', 'password')}>
      ENTER
    </Button>
  </div>
);

export default SignIn;
