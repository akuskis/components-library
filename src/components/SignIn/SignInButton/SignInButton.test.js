import React from 'react';
import { shallow } from 'enzyme';

import SignInButton from '.';

describe('<SignInButton />', () => {
  it('should render without props', () => {
    const shallowed = shallow(<SignInButton />);

    expect(shallowed).toMatchSnapshot();
  });

  it('should render with props', () => {
    const shallowed = shallow(<SignInButton onClick={jest.fn()} />);

    expect(shallowed).toMatchSnapshot();
  });

  it('should call a function on click', () => {
    const cbFunction = jest.fn();
    const component = shallow(<SignInButton onClick={cbFunction} />);

    expect(cbFunction).toHaveBeenCalledTimes(0);

    component.simulate('click');

    expect(cbFunction).toHaveBeenCalledTimes(1);
  });
});
