import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  * as signupActions from '../../actions/signupActions';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import { Container } from 'semantic-ui-react';
/* react-router:
  A React component that will be render when the location matches, It will be rendered with route props.
  
  - this is the HOC to handle the connection with Redux in order to reset the state when click on restart.
*/ 
class SubmitMessagePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backToStart: false
    };
  }

  handleRestart = event => {
    event.preventDefault();
    this.props.resetState();
    this.setState({ backToStart: true });
  }

  render() {
    const { backToStart } = this.state,
      { path } = this.props.match,
      successfulMessage = path === '/success';
    return (
      <Container>
        { successfulMessage ?  (
          <SuccessMessage
            clickHandler={this.handleRestart}
            gotoNextStep={backToStart} 
            nextStepUrl='/' /> ) : (
          <ErrorMessage
            clickHandler={this.handleRestart}
            gotoNextStep={backToStart} 
            nextStepUrl='/' />
          )
        }
      </Container>
    )
  }
}

SubmitMessagePage.propTypes = {
  resetState: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    resetState: () => {
      dispatch(signupActions.setDefaultData()); 
    } 
  };
}

export default connect(null, mapDispatchToProps)(SubmitMessagePage);