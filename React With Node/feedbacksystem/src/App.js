import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login.js'
import NotImplemented from './containers/notimplemented';
import Home from './containers/home';
import Students from './containers/students';
import Admin from './containers/admin';
import ContactUs from './containers/contactus';
import Map from './containers/map';
import MasterPage from './components/masterpage';
import StudentDetail from './containers/studentdetail';

import { Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/students" component={Students}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/*" component={NotImplemented} />
      </Switch>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="/students" render={ (props) =>
          <MasterPage>
           <Students {...props} />
          </MasterPage>
        }/>
         <Route path="/students/detail" render={ (props) =>
          <StudentDetail {...props} />
        }/>
        <Route path="/admin" component={Admin}/>
        <Route path="/contactus" component={ContactUs} />
        <Route path="/map" component={Map} />
        <Route path="/*" component={NotImplemented} />
      </Switch>
    );
  }
}

export default App2;
