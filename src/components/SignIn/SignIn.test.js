import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '.';

describe('<SignIn />', () => {
  it('should render without crashing', () => {
    shallow(<SignIn />);
  });

  it('should call a function on submit', () => {
    const doSignIn = jest.fn();
    const component = shallow(<SignIn onSignIn={doSignIn} />);

    // component.find('LoginField');
    // component.find('PasswordField');
    component.find('.sign-in__submit').simulate('click');
    expect(doSignIn).toHaveBeenCalledTimes(1);
    expect(doSignIn).toHaveBeenCalledWith('login', 'password');
    // expect(doSignIn).; /* toHaveBeenCalledWith('Wade', 'Wilson'); */
  });
});
