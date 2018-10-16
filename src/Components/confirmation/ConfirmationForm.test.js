import React from 'react';
import { shallow, mount } from 'enzyme';
import ConfirmationForm from './ConfirmationForm';

describe('<ConfirmationForm />', () => {

  let handleSubmit, backHandler,
    userName, email, password, favoriteColour, termsAndConditions;

  beforeEach(() => {
    handleSubmit = jest.fn();
    backHandler = jest.fn();
    ({ userName, email, password, favoriteColour, termsAndConditions } = { userName: 'my name', email: 'myemail@mail.com', password: 'qwerty123', favoriteColour: 'red', termsAndConditions: true });
  });

  it('renders the component', () => {
    const component = shallow(<ConfirmationForm 
      loading={false} 
      userName={userName}
      email={email}
      password={password}
      favoriteColour={favoriteColour} 
      termsAndConditions={termsAndConditions}
      submitHandler={handleSubmit}
      goBack={backHandler} />);
      
    expect(component.props().favoriteColour).toEqual('red');
    expect(component.props().userName).toEqual('my name');
    expect(component.props().email).toEqual('myemail@mail.com');
    expect(component.props().termsAndConditions).toEqual(true);
    expect(component.find('ConfirmationForm')).toBeDefined();
  });

  it('submit form', () => {
    const component = mount(<ConfirmationForm 
      loading={false} 
      userName={userName}
      email={email}
      password={password}
      favoriteColour={favoriteColour} 
      termsAndConditions={termsAndConditions}
      submitHandler={handleSubmit}
      goBack={backHandler} />);

    component.find('Form').props().onSubmit();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });

  it('call correct handler when click on back button', () => {
    const component = mount(<ConfirmationForm 
      loading={false} 
      userName={userName}
      email={email}
      password={password}
      favoriteColour={favoriteColour} 
      termsAndConditions={termsAndConditions}
      submitHandler={handleSubmit}
      goBack={backHandler} />);
      
    const buttons = component.find('Button');
    const backButton = buttons.findWhere(button => button.props().secondary);
    backButton.props().onClick();
    expect(backHandler).toHaveBeenCalledTimes(1);
    
    component.unmount();   
  });
});