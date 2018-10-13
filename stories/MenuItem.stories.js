import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import './MenuItem.css';
import SignIn from '../src/components/SignIn';

storiesOf('SignIn', module)
  .add('basic', () => <SignIn onSignIn={action('onSignIn')} />)
  .add('with logo', () => (
    <div className="sign-in-story">
      <img src="pics/sign-in.png" alt="logo" />
      <div className="sign-in-story__form">
        <SignIn onSignIn={action('onSignIn')} />
      </div>
    </div>
  ));
