import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import style from './assets/sty.scss';
import Routes from './routers/index';


ReactDOM.render(<Routes />, document.getElementById('root'));
