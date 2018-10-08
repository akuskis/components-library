import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignIn from '../src/components/SignIn';

storiesOf('SignIn', module)
  .add('basic', () => <SignIn onSignIn={action('onSignIn')} />)
  .add('with logo', () => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img src="pics/sign-in.png" alt="logo" />
      <div style={{ height: '20px' }} />
      <SignIn onSignIn={action('onSignIn')} />
    </div>
  ));
