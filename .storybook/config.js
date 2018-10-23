import 'storybook-addon-material-ui/register';

import { configure, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import './index.css';
import DarkTheme from './theme/DarkTheme';

const req = require.context('../stories', true, /\.stories\.js$/);

addDecorator(muiTheme(DarkTheme));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
