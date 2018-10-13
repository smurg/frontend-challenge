import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      nextStep: false
    }
  }

  handleChange = (event, { name, value }) => {
   /* const propValue = event.target.value,
      propName = event.target.name; */
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    debugger;
    this.setState({ nextStep: true });
    console.log(this.props);
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
          gotoNextStep={false}
          nextStepUrl='/more-info' />


      <pre>{JSON.stringify(this.state, null, 2)}</pre>
     {/* <ButtonLink linkTo="/more-info" buttonText='Next' type='primary' float='right' /> */}
      </Container>
    )
  }
}

export default SignUpPage;

