import React, { Component } from 'react';

class ModalLogin extends Component {
  render() {
    return (
      <div className="modal fade _login_mdl" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="devide">
              <div className="_left-img">
                <div className="bvo">
                  <p>REACH</p>
                  <p>YOUR</p>
                  <p>DREAM</p>
                </div>
              </div>
              <div className="_right-form">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="icon ion-ios-close"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="modal-title">YKN</p>
                  <p className="wlc">Welcome Back,</p>
                  <span className="shg">Sign In to Continue</span>
                  <form action="#" className="fmr_gr">
                    <div className="form-group usr bfr_inp">
                      <input type="text" className="form-control username fmr_" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group pas bfr_inp">
                      <input type="password" className="form-control password fmr_" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <button className="btn btn_lg">SIGN IN</button>
                    </div>
                  </form>
                  <p className="nb">NB: Contact administrator when you forgot<br/> the password.</p>
                </div>
                <div className="modal-footer">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalLogin;
