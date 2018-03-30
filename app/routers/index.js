import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/app';


export default () => (
  <BrowserRouter path='/'>
    <Route path="/" component={ App }/>
  </BrowserRouter>
)
