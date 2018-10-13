import React from 'react';
import { shallow } from 'enzyme';

import SidebarMenu from '.';

describe('<SidebarMenu />', () => {
  it('should render without props', () => {
    const component = shallow(<SidebarMenu />);

    expect(component).toMatchSnapshot();
  });

  it('should render with content', () => {
    const items = [
      { title: 'Item A', routePath: '/a' },
      { title: 'Item B', routePath: '/b' },
      { title: 'Item C', routePath: '/c' }
    ];

    const component = shallow(<SidebarMenu items={items} />);

    expect(component).toMatchSnapshot();
  });
});
