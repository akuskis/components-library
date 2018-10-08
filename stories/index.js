import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignIn from '../src/components/SignIn';

storiesOf('SignIn', module)
  .add('full screen', () => <SignIn onSignIn={action('onSignIn')} />)
  .add('with logo', () => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img src="pics/sign-in.png" alt="logo" />
      <div style={{ width: '400px', textAlign: 'center' }}>
        <SignIn onSignIn={action('onSignIn')} />
      </div>
    </div>
  ));
