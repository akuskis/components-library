import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignIn from '../src/components/SignIn';

storiesOf('Button', module).add('with text', () => (
  <button type="submit" onClick={action('clicked')}>
    Hello Button
  </button>
));

storiesOf('SignIn', module).add('without logo', () => <SignIn onSignIn={action('onSignIn')} />);
storiesOf('SignIn', module).add('with logo', () => <SignIn logo="pics/sign-in.png" onSignIn={action('onSignIn')} />);
