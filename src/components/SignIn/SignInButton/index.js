// @flow

import { Button } from '@material-ui/core';
import React from 'react';

import './signInButton.css';

type Props = {
  onClick: Function
};

const SignInButton = ({ onClick }: Props) => (
  <Button name="submit" className="sign-in-button" onClick={onClick}>
    ENTER
  </Button>
);

export default SignInButton;
