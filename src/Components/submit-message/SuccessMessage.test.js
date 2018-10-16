import React from 'react';
import { shallow, mount } from 'enzyme';
import SuccessMessage from './SuccessMessage';

describe('<SuccessMessage />', () => {

  let handleReset;

  beforeEach(() => {
    handleReset = jest.fn();
  });

  it('renders the component', () => {
    const component = shallow(<SuccessMessage 
      clickHandler={handleReset} />);
    expect(component.find('SuccessMessage')).toBeDefined();
    expect(component.find('SubmitMessage')).toBeDefined();
  });

  it('reset button calls correct event handler', () => {
    const component = mount(<SuccessMessage 
      clickHandler={handleReset} />);

    component.find('Button').props().onClick();
    expect(handleReset).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });

  it('call correct handler when click on back button', () => {
    const component = mount(<SuccessMessage 
      clickHandler={handleReset} />);
    
    expect(component.find('SubmitMessage')).toBeDefined();
    const message = component.find('SubmitMessage');
    expect(message.props().title).toEqual('Success!');
    expect(message.props().message).toEqual('You Should receive a confirmation email soon.');
    component.unmount();   
  });
});