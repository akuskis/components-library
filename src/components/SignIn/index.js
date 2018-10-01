import { Button, Input } from '@material-ui/core';
import React from 'react';

import './signIn.css';

const SignIn = ({ img, onSignIn }) => (
  <div className="sign-in">
    <div className="sign-in__logo">
      <img src={img} alt="sign in" />
    </div>
    <div className="sign-in__login">
      <Input placeholder="login" />
    </div>
    <div className="sign-in__password">
      <Input placeholder="password" type="password" />
    </div>
    <div className="sign-in__submit">
      <Button onClick={onSignIn}>ENTER</Button>
    </div>
  </div>
);

export default SignIn;
