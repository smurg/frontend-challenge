import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUpPage } from './home/SignUpPage';
import { MoreInfoPage } from './more-info/MoreInfoPage';
import { ConfirmationPage } from './confirmation/ConfirmationPage';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import { Container } from 'semantic-ui-react';

const RoutableWizzardForm = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/'component={SignUpPage} />
        <Route path='/more-info' component={MoreInfoPage} />
        <Route path='/confirmation' component={ConfirmationPage} />
        <Route path='/success' component={SuccessPage} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </Container>
  )
}

export default RoutableWizzardForm;
