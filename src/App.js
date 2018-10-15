import React from 'react';
import RoutableWizzardForm from './Components/RoutableWizzardForm';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <RoutableWizzardForm></RoutableWizzardForm>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
