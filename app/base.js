import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './assets/sty.scss';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
