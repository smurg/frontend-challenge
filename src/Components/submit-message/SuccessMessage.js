import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import SubmitMessage from './SubmitMessage';
import RoutableFormHOC from '../common/RoutableFormHOC';

// this component is in charge of rendering the successful submit message
const SuccessMessage = ({ clickHandler }) => {
  return (
    <SubmitMessage
      title='Success!'
      message='You Should receive a confirmation email soon.' 
      icon={
        <Icon name='check circle' color='green' size='huge' />
      }
      clickHandler={clickHandler} />
  );
};

SuccessMessage.propTypes = {
  clickHandler: PropTypes.func.isRequired
}
// we need it to be routable, in order to redirect the page after clicking on restart
export default RoutableFormHOC(SuccessMessage);

