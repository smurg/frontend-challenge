import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';
import RoutableFormHOC from '../common/RoutableFormHOC';
import './SignUpForm.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword = () => {
    const lastPassword = this.state.showPassword;
    this.setState({showPassword: !lastPassword});
  }

  render() {
  const { loading, userName, email, emailError, password, onChangeHandler, submitHandler } = this.props;

  return (
    <Form loading={loading} onSubmit={submitHandler} error={emailError} id='sign-up'>
      <Form.Input required label='First Name' name='userName' value={userName} onChange={onChangeHandler} placeholder='First Name'/> 
      <Form.Input required 
       label='Email' 
       name='email' 
       value={email}
       error={emailError} 
       onChange={onChangeHandler} 
       placeholder='Email'/>
       { emailError && 
        <Message
          error={emailError}
          content='Please enter a valid email address.'/> }

      <Form.Input required
       label='Password'
       icon={{ name: this.state.showPassword ? 'eye' : 'eye slash', link: true, onClick: this.toggleShowPassword }} 
       name='password' 
       type={this.state.showPassword ? 'text' : 'password'}
       value={password} 
       onChange={onChangeHandler} 
       placeholder='Password'/>
       <div className="field required-info">
        <label>required fields</label>
      </div>
      <Form.Button primary content='Next' disabled={!userName || !email || !password} /> 
    </Form>
  );
}
}

SignUpForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
}

export default RoutableFormHOC(SignUpForm);

