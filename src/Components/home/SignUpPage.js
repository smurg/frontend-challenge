import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import  * as signupActions from '../../actions/signupActions';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: props.userName,
      email: props.email,
      password: props.password,
      nextStep: false
    };
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    const { userName, email, password } = this.state;
    this.props.saveSignUp({ userName, email, password });
    this.setState({ nextStep: true });
    event.preventDefault();
  }

  render() {
    const { userName, email, password, nextStep } = this.state;
    return (
      <Container text>
        <Header as='h1' textAlign='center'>Sign Up</Header>
        <SignUpForm 
          loading={false} 
          userName={userName} 
          email={email}
          password={password}
          onChangeHandler={this.handleChange}
          submitHandler={this.handleSubmit}
          gotoNextStep={nextStep}
          nextStepUrl='/more-info' />
      </Container>
    )
  }
}

SignUpPage.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  saveSignUp: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName,
    email: state.email,
    password: state.password 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveSignUp: (signUpData) => {
      dispatch(signupActions.signUp(signUpData)); 
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
