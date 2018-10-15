import React from 'react';
import { Redirect } from 'react-router-dom';

const RoutableFormHOC = (WrappedComponent) => {
  /*
    HOC are usable for encapsulating behaviour to be reused across different components
  */
  return (props) => {
    const isEmpty = (prop) => {
      return (
        prop === null ||
        prop === undefined
      )
    }
    // if we don't pass any of the redirection props, we will render the WrappedComponent normally
    return (
      !isEmpty(props.gotoNextStep) && props.gotoNextStep ? 
        <Redirect to={props.nextStepUrl}/> :
        !isEmpty(props.gotoPreviousStep) && props.gotoPreviousStep ?
          <Redirect to={props.previousStepUrl}/> :
          !isEmpty(props.error) && props.error ?
            <Redirect to={props.errorPageUrl}/> :
            <WrappedComponent {...props}/>
    );
  }
}

export default RoutableFormHOC;
