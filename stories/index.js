import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignIn from '../src/components/SignIn';

storiesOf('SignIn', module).add('without logo', () => <SignIn onSignIn={action('onSignIn')} />);

storiesOf('SignIn', module).add('with logo', () => (
  <SignIn logoPath="pics/sign-in.png" onSignIn={action('onSignIn')} />
));
