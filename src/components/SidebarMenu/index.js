// @flow

import React from 'react';

import MenuItem from './MenuItem';
import './sidebarMenu.css';

type Props = {
  items: Array<{
    title: string,
    routePath: string
  }>
};

const SidebarMenu = ({ items }: Props) => {
  const content =
    items && items.map(item => <MenuItem key={item.title + item.routePath} {...item} />);

  return <div className="sidebar-menu">{content}</div>;
};

export default SidebarMenu;
