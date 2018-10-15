import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ConfirmationForm from './ConfirmationForm';
import { connect } from 'react-redux';
import  * as signupActions from '../../actions/signupActions';

export class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: props.userName,
      email: props.email,
      password: props.password,
      favoriteColour: props.favoriteColour,
      termsAndConditions: props.termsAndConditions,
      toSubmit: false,
      previousStep: false,
      submitted: false,
      submitError: false
    }
  }

  cancelSubmit = event => {
    this.setState({ previousStep: true });
    event.preventDefault();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userName, email, password, favoriteColour, termsAndConditions } = this.state;
    this.setState({ toSubmit: true });
 
    fetch('http://localhost:3001/api/submit', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "name": userName,
        "email": email,
        "password": password,
        "color": favoriteColour,
        "terms": termsAndConditions
      })
    })
    .then(response => {
      if (!response.ok) { 
        throw Error(response.status);
      } 
      this.setState({ toSubmit: false, submitted: true });
    })
    .catch(error => {
      this.setState({ toSubmit: false, submitError: true });
    });
  }

  maskPassword = password => {
    return password.split('').fill('*').join('');
  }

  render() {
    const { userName, email, password, favoriteColour, termsAndConditions, toSubmit, previousStep, submitted, submitError } = this.state;
    return (
      <Container text>
        <Header 
          as='h1' 
          textAlign='center' 
          content="You're almost done!" 
          subheader="Please make sure this information is correct before submitting your request."></Header>
        
        <ConfirmationForm
          userName={userName}
          email={email}
          password={this.maskPassword(password)}
          favoriteColour={favoriteColour}
          termsAndConditions={termsAndConditions}
          loading={toSubmit}
          submitHandler={this.handleSubmit}
          goBack={this.cancelSubmit}
          gotoPreviousStep={previousStep}
          previousStepUrl='/more-info'
          gotoNextStep={submitted}
          nextStepUrl='/success'
          error={submitError}
          errorPageUrl='/error' />
      </Container>
    )
  }
}

ConfirmationPage.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  favoriteColour: PropTypes.string.isRequired,
  termsAndConditions: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName,
    email: state.email,
    password: state.password,
    favoriteColour: state.favoriteColour,
    termsAndConditions: state.termsAndConditions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (aditionalInfoData) => {
      dispatch(signupActions.aditionalInfo(aditionalInfoData)); 
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);