import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '.';

describe('<SignIn />', () => {
  it('should render without props', () => {
    const component = shallow(<SignIn />);

    expect(component).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const component = shallow(<SignIn onSignIn={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it('should call a function on sign in', () => {
    const credentials = {
      login: 'Wade',
      password: 'Wilson'
    };

    const doSignIn = jest.fn();
    const component = shallow(<SignIn onSignIn={doSignIn} />);

    component
      .find({ name: 'login' })
      .simulate('change', { target: { name: 'login', value: credentials.login } });
    component
      .find({ name: 'password' })
      .simulate('change', { target: { name: 'password', value: credentials.password } });
    component.find({ name: 'submit' }).simulate('click');

    expect(doSignIn).toHaveBeenCalledTimes(1);
    expect(doSignIn).toHaveBeenCalledWith({
      login: credentials.login,
      password: credentials.password
    });
  });
});
