import React from 'react';
import { shallow, mount } from 'enzyme';
import MoreInfoForm from './MoreInfoForm';

describe('<MoreInfoForm />', () => {

  it('renders the component', () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const backHandler = jest.fn();
    const { favoriteColour, colourList, termsAndConditions } = { favoriteColour: 'red', colourList: ['red', 'green', 'white'], termsAndConditions: false };
    const component = shallow(<MoreInfoForm 
      loading={false} 
      favoriteColour={favoriteColour} 
      colourList={colourList} 
      termsAndConditions={termsAndConditions}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit}
      goBack={backHandler} />);
      
    expect(component.props().favoriteColour).toEqual('red');
    expect(component.props().termsAndConditions).toEqual(false);
    expect(component.find('MoreInfoForm')).toBeDefined();
    expect(component.find('Form')).toBeDefined();
  });

  it('call change function when trying to update field', () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const backHandler = jest.fn();
    const colourList = [ {text:'red', value:'red'}, {text:'green', value:'green'}, {text:'white', value:'white'}];
    const { favoriteColour, termsAndConditions } = { favoriteColour: 'red', termsAndConditions: false };
    const component = mount(<MoreInfoForm 
      loading={false} 
      favoriteColour={favoriteColour} 
      colourList={colourList} 
      termsAndConditions={termsAndConditions}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit}
      goBack={backHandler} />);

    component.find('Select').props().onChange();
    expect(handleChange).toHaveBeenCalledTimes(1);
    component.find('Checkbox').props().onChange();
    expect(handleChange).toHaveBeenCalledTimes(2); // this is the second time we call the handleChange event
    component.unmount();   
  });

  it('submit form', () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const backHandler = jest.fn();
    const colourList = [ {text:'red', value:'red'}, {text:'green', value:'green'}, {text:'white', value:'white'}];
    const { favoriteColour, termsAndConditions } = { favoriteColour: 'red', termsAndConditions: false };
    const component = mount(<MoreInfoForm 
      loading={false} 
      favoriteColour={favoriteColour} 
      colourList={colourList} 
      termsAndConditions={termsAndConditions}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit}
      goBack={backHandler} />);
    
    component.find('Form').props().onSubmit();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });

  it('call correct handler when click on back button', () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const backHandler = jest.fn();
    const colourList = [ {text:'red', value:'red'}, {text:'green', value:'green'}, {text:'white', value:'white'}];
    const { favoriteColour, termsAndConditions } = { favoriteColour: 'red', termsAndConditions: false };
    const component = mount(<MoreInfoForm 
      loading={false} 
      favoriteColour={favoriteColour} 
      colourList={colourList} 
      termsAndConditions={termsAndConditions}
      onChangeHandler={handleChange}
      submitHandler={handleSubmit}
      goBack={backHandler} />);

    const buttons = component.find('Button');
    const backButton = buttons.findWhere(button => button.props().secondary);
    backButton.props().onClick();
    expect(backHandler).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });
});