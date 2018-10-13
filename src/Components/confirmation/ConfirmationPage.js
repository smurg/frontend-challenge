import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import ButtonLink from '../common/ButtonLink';

export class ConfirmationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      error: false
    }
  }

  handleSubmit = (data) => {
    // an event triggers an state change and a re-render
    this.setState(() => ({
      submitted: true,
      error: false
    }))
  }

  render() {
    if(this.state.submitted === true && !this.state.error) {
      return <Redirect to='/success'/>;
    }
    if(this.state.submitted === true && this.state.error) {
      return <Redirect to='/error'/>;
    }
    return (
      <div>
        <h3>Confirmation</h3>

        <ButtonLink linkTo="/" buttonText='Back' type='secondary' />
        <Button primary onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

export default ConfirmationPage;
