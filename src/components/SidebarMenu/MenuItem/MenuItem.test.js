import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '.';

describe('<MenuItem />', () => {
  it('should render', () => {
    const component = shallow(<MenuItem title="Title" routePath="/route" />);

    expect(component).toMatchSnapshot();
  });
});
