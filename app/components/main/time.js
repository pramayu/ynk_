import React, { Component } from 'react';


class GetTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "00",
      minute: "00",
      seconds: "00",
      amPm: "am"
    }
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    this.loadInterval = setInterval( this.getTime, 1000);
  }

  getTime() {
    let takeTwelve = n => n > 12 ? n - 12 : n;
    let addZero = n => n < 10 ? "0" + n : n;

    setInterval(() => {
      let d, h, m, s, t, amPm;
      d = new Date();
      h = addZero(takeTwelve(d.getHours()));
      m = addZero(d.getMinutes());
      s = addZero(d.getSeconds());
      amPm = d.getHours() >= 12 ? "PM" : "AM";

      this.setState({
        hours: h,
        minute: m,
        seconds: s,
        amPm: amPm
      });
    }, 1000);
  };

  render() {
    return (
      <div className="get_time">
        <div className="_bg">
          <div className="wide_text">
            <h4>PT YUNI KARYA NUSA</h4>
          </div>
          <div className="tme_clock">
            <div className="hour _tme">
              <h4>HOUR</h4>
              <span>{ this.state.hours }</span>
            </div>
            <div className="minute _tme">
              <h4>MINUTE</h4>
              <span> { this.state.minute}</span>
            </div>
            <div className="second _tme">
              <h4>SECOND</h4>
              <span> { this.state.seconds }</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GetTime;
