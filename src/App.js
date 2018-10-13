import React, { Component } from 'react';
import RoutableWizzardForm from './Components/RoutableWizzardForm';

class App extends Component {
  render() {
    
    return (
      <div>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RoutableWizzardForm></RoutableWizzardForm>
      </div>
    );
  }
}

export default App;
