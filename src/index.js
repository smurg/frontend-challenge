import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root")
);
