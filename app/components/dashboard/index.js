import React, { Component } from 'react';


class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightX: props.height
    }
  }

  componentWillMount() {
    this.setState({heightX: window.innerHeight});
  }

  render() {
    console.log(this.state.heightX)
    return (
      <div className="_main_drb" style={{height: this.state.heightX}}>
        <div className="_left_drb" style={{height: this.state.heightX}}>
          <div className="_left_containt">
            <div className="log_">
              <a href="#" className="gwk">GRIYA WAHANA KARYA</a>
            </div>
            <div className="menu_">
              <p className="main">Main</p>
              <ul className="muo">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Report</a>
                </li>
                <li>
                  <a href="#">Employee</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="_right_drb">
          <div className="nabv"></div>
        </div>
      </div>
    )
  }
}


export default MainDashboard;
