// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

import './menuItem.css';

type Props = {
  title: string,
  routePath: string
};

const MenuItem = ({ title, routePath }: Props) => (
  <NavLink to={routePath} className="menu-item" activeClassName="menu-item_active">
    <div>{title}</div>
    <div className="menu-item__trailing-line" />
  </NavLink>
);

export default MenuItem;
