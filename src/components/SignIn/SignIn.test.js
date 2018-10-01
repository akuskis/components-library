import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '.';

describe('<SignIn />', () => {
  it('should render without crashing', () => {
    shallow(<SignIn />);
  });
});
