import React, { Component } from 'react';
import './App.css';
import Redux from './Redux/Redux';
import Mobx from './Mobx/Mobx';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Redux />
        <Mobx />
      </div>
    );
  }
}

export default App;
