import { configure } from '@storybook/react';
import 'storybook-addon-material-ui/register';

function loadStories() {
  require('../stories/MenuItem.js');
  require('../stories/SidebarMenu.js');
}

configure(loadStories, module);
