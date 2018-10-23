import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import './SidebarMenu.css';
import SidebarMenu from '../src/components/SidebarMenu';

storiesOf('SidebarMenu', module)
  .addDecorator(StoryRouter())
  .add('left', () => {
    const menuItems = [
      { title: 'Welcome', routePath: '/welcome' },
      { title: 'Data sheet', routePath: '/data_sheet' },
      { title: 'Examples', routePath: '/examples' }
    ];

    return (
      <div className="sidebar-menu-story">
        <div className="sidebar-menu-story__content">
          <SidebarMenu items={menuItems} />
        </div>
        <div className="sidebar-menu-story__vertical-line" />
      </div>
    );
  });
