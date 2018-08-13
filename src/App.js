import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './component/common/Tabbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './component/page/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
          <Tabbar/>
        </div>
      </Router>
    );
  }
}

export default App;
