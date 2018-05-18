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
import CheckBoxSample from './containers/FormCheckbox/search';
import { Route, Switch, Redirect } from 'react-router-dom'; 

class UnAuthorized extends Component {
  render() {
    debugger;
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

const CustomRoute = (props) => <Route {...props} />

const CustomRoute2 = ({component: DynamicComponent, ...rest}) => 
    <Route {...rest} component={DynamicComponent}/>

const CustomRoute3 = ({component: DynamicComponent, ...rest}) =>
    <Route {...rest} render={props =>{
      return <DynamicComponent {...props} />
    }}/>
/*
to debug and see props and rest
const CustomRoute3 = ({component: DynamicComponent, ...rest}) => {
  debugger;
  return <Route {...rest} render={props =>{
    debugger;
    return <DynamicComponent {...props} />
  }}/>
}
*/

const MasterPageRoute = ({component: DynamicComponent, ...rest}) => 
    <Route {...rest} render={props =>{
      return <MasterPage {...props}><DynamicComponent {...props} /></MasterPage>
  }}/>

const MasterPageAuthenticatedRoute = ({component: DynamicComponent, ...rest}) => 
    <Route {...rest} render={props =>{
      if(sessionStorage.getItem('isLoggedIn') == "true"){
        return <MasterPage {...props}><DynamicComponent {...props} /></MasterPage>
      } else {
        return <Redirect to="/" />
      }
  }}/>

const AuthenticatedRoute = ({component: DynamicComponent, ...rest}) => 
  <Route {...rest} render={props =>{
    if(sessionStorage.getItem('isLoggedIn') == "true"){
      return <DynamicComponent {...props} />
    } else {
      return <Redirect to="/" />
    }
}}/>

const AuthenticatedAuthorizedRoute = ({component: DynamicComponent, ...rest}) => 
  <Route {...rest} render={props =>{
    if(sessionStorage.getItem('isLoggedIn') == "true"){
      if(sessionStorage.getItem('role') == "Admin"){
        return <DynamicComponent {...props} />
      } else {
        return <Redirect to="/unAuthorized" />
      }
    } else {
      return <Redirect to="/" />
    }
}}/>

const MasterPageUnthorizedRoute = ({component: DynamicComponent, ...rest}) => 
  <Route {...rest} render={props =>{
    if(sessionStorage.getItem('isLoggedIn') == "true"){
      if(sessionStorage.getItem('role') == "Admin"){
        return <MasterPage {...props}>
                <DynamicComponent {...props} />
              </MasterPage>
      } else {
        return <Redirect to="/unAuthorized" />
      }
    } else {
      return <Redirect to="/" />
    }
}}/>

class App2 extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/form" component={CheckBoxSample} />
        <MasterPageAuthenticatedRoute path="/home" component={Home} />
        <AuthenticatedRoute path="/attendees" component={Attendees}/>
        <MasterPageUnthorizedRoute exact path="/students" component={Students}/>
        <MasterPageUnthorizedRoute exact path="/students/detail" component={StudentDetail}/>
        <AuthenticatedRoute path="/unAuthorized" component={UnAuthorized} />
        <AuthenticatedAuthorizedRoute path="/admin" component={Admin} />
        <MasterPageAuthenticatedRoute path="/contactus" component={ContactUs} />
        <MasterPageAuthenticatedRoute exact path="/map" component={Map} />
        <MasterPageAuthenticatedRoute exact path="/branches" component={Branches} />
        <Route path="/*" component={NotImplemented} />
      </Switch>
    );
  }
}

export default App2;
