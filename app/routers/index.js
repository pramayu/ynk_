import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/app';
import MainDashboard from '../components/dashboard/index';


export default () => (
  <BrowserRouter path='/'>
    <Switch>
      <Route path="/" exact component={ App }/>
      <Route path="/dashboard" component={ MainDashboard }/>
    </Switch>
  </BrowserRouter>
)
