import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login.js'
import NotImplemented from './containers/notimplemented';

import { Route, Switch } from 'react-router-dom'; 


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/*" component={NotImplemented} />
      </Switch>
    );
  }
}

export default App;
