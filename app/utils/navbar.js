import React, { Component } from 'react';


class Navbar extends Component {



  render() {
    return (
      <div className="navbar navbar-light bg-light _custom-navbar">
        <a className="navbar-brand _custom-logo" href="#">YKN</a>
        <div className="navbar-nav ml-right _right_login">
          <a href="#" className="_custom-login icon ion-ios-barcode-outline"></a>
        </div>
      </div>
    )
  }
}


export default Navbar;
