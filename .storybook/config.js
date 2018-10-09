import { configure } from '@storybook/react';
import 'storybook-addon-material-ui/register';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
