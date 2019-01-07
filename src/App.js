import React, { Component } from 'react';
import './App.css';
import Redux from './Redux/Redux';
import Mobx from './Mobx/Mobx';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', padding: 20 }}>
        <Redux />
        <Mobx />
      </div>
    );
  }
}

export default App;
