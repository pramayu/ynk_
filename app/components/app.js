import React, { Component } from 'react';
import Navbar from '../utils/navbar';
import GetTime from './main/time';
import ModalLogin from './login/login';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GetTime />
        <ModalLogin />
      </div>
    )
  }
}

export default App;
