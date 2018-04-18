import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login.js';

import { Route, Switch } from 'react-router-dom';

class D1 extends Component {
  render() { return (<div> Welcome to Component D1</div> ) }
}
class D2 extends Component {
  render() { return (<div> Welcome to Component D2</div> ) }
}
class D3 extends Component {
  render() { return (<div> Welcome to Component D3</div> ) }
}
class D4 extends Component {
  render() { return (<div> Welcome to Component D4</div> ) }
}
class D5 extends Component {
  render() { return (<div> Welcome to Component D5</div> ) }
}
class D6 extends Component {
  render() { return (<div> Welcome to Component D6</div> ) }
}
class D7 extends Component {
  render() { return (<div> Welcome to Component D7</div> ) }
}
class D8 extends Component {
  render() { return (<div> Welcome to Component D8</div> ) }
}
class D9 extends Component {
  render() { return (<div> Welcome to Component D9</div> ) }
}
class D10 extends Component {
  render() { return (<div> Welcome to Component D10</div> ) }
}

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/r1/r8" component={D8} />
        <Route path="/r1/r9" component={D9} />
        <Route path="/r1/r10" component={D10} />
      </div>
    );
  }
}

// example of exact to pick r1 if route is r1 and not r1/r9
class App2 extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" exact component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/r1/r8" component={D8} />
        <Route path="/r1/r9" component={D9} />
        <Route path="/r1/r10" component={D10} />
      </div>
    );
  }
}

// example of * where it is picked up in all routes.
class App3 extends Component {
  render() {
    return (
      <div>
        <Route path="/r1" exact component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/r1/r8" component={D8} />
        <Route path="/r1/r9" component={D9} />
        <Route path="/r1/r10" component={D10} />
        <Route path="/*" component={D6} />
      </div>
    );
  }
}

// example of Switch where if any component is picked up, it willnot accept other components
class App4 extends Component {
  render() {
    return (
      <Switch>
        <Route path="/r1" exact component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/r1/r8" component={D8} />
        <Route path="/r1/r9" component={D9} />
        <Route path="/r1/r10" component={D10} />
        <Route path="/*" component={D6} />
      </Switch>
    );
  }
}

class Header extends Component {
  render() { return (<div> Welcome to Demo</div> ) }
}

class Footer extends Component {
  render() { return (<div> Copyright @2008 </div> ) }
}

class App5 extends Component {
  render() {
    return (
      <div>
        <Route path="/*" component={Header} />
        <Route path="/r1" component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/*" component={Footer} />
      </div>
    );
  }
}

export default App5;
