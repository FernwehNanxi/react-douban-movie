import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './component/common/Tabbar';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './component/page/Home';
import My from './component/page/My';
import Movie from './component/page/Movie';
import City from './component/page/City';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path='/index' component={Home}/>
            <Route path='/movie' component={Movie}/>
            <Route path='/my' component={My}/>
            <Route path='/city' component={City}/>
            <Redirect from='/' to='/index'/>
            <Route component={Home}/>
          </Switch>
          <Tabbar/>
        </div>
      </Router>
    );
  }
}

export default App;
