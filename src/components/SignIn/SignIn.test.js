import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '.';

describe('<SignIn />', () => {
  it('should render without props', () => {
    const shallowed = shallow(<SignIn />);

    expect(shallowed).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const shallowed = shallow(<SignIn logoPath="some.pic" onSignIn={jest.fn()} />);

    expect(shallowed).toMatchSnapshot();
  });

  it('should call a function on sign in', () => {
    const credentials = {
      login: 'Wade',
      password: 'Wilson'
    };

    const login = 'login';
    const password = 'password';

    const doSignIn = jest.fn();
    const component = shallow(<SignIn onSignIn={doSignIn} />);

    component.find({ name: login }).simulate('change', { target: { name: login, value: credentials.login } });
    component.find({ name: password }).simulate('change', { target: { name: password, value: credentials.password } });
    component.find('SignInButton').simulate('click');

    expect(doSignIn).toHaveBeenCalledTimes(1);
    expect(doSignIn).toHaveBeenCalledWith(credentials.login, credentials.password);
  });
});
