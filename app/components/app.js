import React, { Component } from 'react';
import Navbar from '../utils/navbar';
import GetTime from './main/time';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GetTime />
      </div>
    )
  }
}

export default App;
