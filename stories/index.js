import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import './index.css';
import SignIn from '../src/components/SignIn';

storiesOf('SignIn', module)
  .add('basic', () => <SignIn onSignIn={action('onSignIn')} />)
  .add('with logo', () => (
    <div className="SignInStory">
      <img src="pics/sign-in.png" alt="logo" />
      <div className="SignInStory__form">
        <SignIn onSignIn={action('onSignIn')} />
      </div>
    </div>
  ));
