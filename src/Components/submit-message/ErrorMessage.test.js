import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {

  let handleReset;

  beforeEach(() => {
    handleReset = jest.fn();
  });

  it('renders the component', () => {
    const component = shallow(<ErrorMessage 
      clickHandler={handleReset} />);
    expect(component.find('ErrorMessage')).toBeDefined();
    expect(component.find('SubmitMessage')).toBeDefined();
  });

  it('reset button calls correct event handler', () => {
    const component = mount(<ErrorMessage 
      clickHandler={handleReset} />);

    component.find('Button').props().onClick();
    expect(handleReset).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });

  it('call correct handler when click on back button', () => {
    const component = mount(<ErrorMessage 
      clickHandler={handleReset} />);
    
    expect(component.find('SubmitMessage')).toBeDefined();
    const message = component.find('SubmitMessage');
    expect(message.props().title).toEqual('Error');
    expect(message.props().message).toEqual('Uh oh! Something went wrong. Please try again later.');
    component.unmount();   
  });
});