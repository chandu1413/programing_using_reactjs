import React from 'react';
import { Link, Switch, Route } from 'react-router';
import Nav from './nav';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

export default class App extends React.Component {
  render() {    
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exactly component={Landing} pattern="/" />
              <Route exactly component={Page1} pattern="/path1" />
              <Route exactly component={Page2} pattern="/path2" />
              <Route exactly component={Page3} pattern="/path3" />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}