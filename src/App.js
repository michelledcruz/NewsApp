import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/general">
            <News category={'general'} pageSize={6}/>
          </Route>
          <Route path="/health">
            <News category={'health'} pageSize={6}/>
          </Route>
          <Route path="/entertainment">
            <News category={'entertainment'} pageSize={6}/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

