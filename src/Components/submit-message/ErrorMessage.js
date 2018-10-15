import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import SubmitMessage from './SubmitMessage';
import RoutableFormHOC from '../common/RoutableFormHOC';

// this component is in charge of rendering the successful submit message
const ErrorMessage = ({ clickHandler }) => {
  return (
    <SubmitMessage
      title='Error'
      message='Uh oh! Something went wrong. Please try again later.' 
      icon={
        <Icon name='exclamation circle' color='red' size='huge' />
      }
      clickHandler={clickHandler} />
  );
};

ErrorMessage.propTypes = {
  clickHandler: PropTypes.func.isRequired
}
// we need it to be routable, in order to redirect the page after clicking on restart
export default RoutableFormHOC(ErrorMessage);
