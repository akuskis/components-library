import { configure } from '@storybook/react';
import 'storybook-addon-material-ui/register';

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
