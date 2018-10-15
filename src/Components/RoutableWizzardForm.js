import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './home/SignUpPage';
import MoreInfoPage from './more-info/MoreInfoPage';
import ConfirmationPage from './confirmation/ConfirmationPage';
import SubmitMessagePage from './submit-message/SubmitMessagePage';
import { Grid } from 'semantic-ui-react';

const RoutableWizzardForm = () => {
  return (
    <Grid columns={1} container={true} padded='vertically'>
      <Grid.Row>
        <Switch>
          <Route exact path='/'component={SignUpPage} />
          <Route path='/more-info' component={MoreInfoPage} />
          <Route path='/confirmation' component={ConfirmationPage} />
          <Route path='/success' component={SubmitMessagePage} />
          <Route path='/error' component={SubmitMessagePage} />
        </Switch>
      </Grid.Row>
    </Grid>
  )
}

export default RoutableWizzardForm;
