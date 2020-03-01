import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from'./navbar';
import Home from '../Home';

function Navigation() {
    return (
        <Router>
            <NavbarComponent />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
  }
  
  export default Navigation;
