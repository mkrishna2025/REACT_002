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
import Branches from './containers/branches';
import MasterPage from './components/masterpage';
import StudentDetail from './containers/studentdetail';
import Attendees from './containers/attendees';

import { Route, Switch, Redirect } from 'react-router-dom'; 

class UnAuthorized extends Component {
  render() {
    return (<div> UnAuthorized </div>)
  }
}
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
        <Route path="/attendees" render={props => {
          if(sessionStorage.getItem('isLoggedIn') == "true"){
            return <Attendees {...props} />
          } else {
            return <Redirect to="/" />
          }
          
        }} />

        <Route exact path="/students" render={ (props) => {
            if(sessionStorage.getItem('role') == "Admin"){
              return <MasterPage>
                      <Students {...props} />
                    </MasterPage>
            } else {
              return <Redirect to="/unAuthorized" />
            }
          }
        }/>
         <Route path="/students/detail" render={ (props) =>
          <StudentDetail {...props} />
        }/>
        <Route path="/unAuthorized" component={UnAuthorized} />
        <Route path="/admin" component={Admin}/>
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/map" render={ (props) =>
          <MasterPage>
           <Map {...props} />
          </MasterPage>
        }/>
        <Route exact path="/branches" render={ (props) =>
          <MasterPage>
           <Branches {...props} />
          </MasterPage>
        }/>
        <Route path="/*" component={NotImplemented} />
      </Switch>
    );
  }
}

export default App2;
