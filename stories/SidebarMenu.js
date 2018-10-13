import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import SidebarMenu from '../src/components/SidebarMenu';

storiesOf('SidebarMenu', module)
  .addDecorator(StoryRouter())
  .add('basic', () => {
    const menuItems = [
      { title: 'Item A', routePath: '/a' },
      { title: 'Item B', routePath: '/b' },
      { title: 'Item C', routePath: '/c' }
    ];

    return <SidebarMenu items={menuItems} />;
  });
