import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './screens/Home';

class App extends Component {
  render() {
    return (
      <div>
        <div className='wrapper'>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
