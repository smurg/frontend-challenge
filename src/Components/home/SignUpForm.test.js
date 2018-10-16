import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow, mount } from 'enzyme';

describe('<SignUpForm />', () => {
  let handleChange, handleSubmit,
    userName, email, password;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    ({ userName, email, password } = { userName: 'my name', email: 'myemail@mail.com', password: 'qwerty123' });
  });

  it('renders the component', () => {
    const component = shallow(<SignUpForm 
      loading={false} 
      userName={userName} 
      email={email} 
      password={password}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit} />);
      
    expect(component.props().userName).toEqual('my name');
    expect(component.props().email).toEqual('myemail@mail.com');
    expect(component.find('SignUpForm')).toBeDefined();
    expect(component.find('Form')).toBeDefined();
  });

  it('call change function when trying to update field', () => {
    const component = mount((<SignUpForm 
      loading={false} 
      userName={userName} 
      email={email} 
      password={password}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit} />));
    
    component.find('Input').first().props().onChange();
    expect(handleChange).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });

  it('submit form', () => {
    const component = mount((<SignUpForm 
      loading={false} 
      userName={userName} 
      email={email} 
      password={password}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit} />));
    
    component.find('Form').props().onSubmit();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });
});