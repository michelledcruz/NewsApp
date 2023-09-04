import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key={"general"} category={'general'} pageSize={6}/>} />
          <Route exact path="/health" element={<News key={"health"} category={'health'} pageSize={6}/>} />
          <Route exact path="/entertainment" element={<News key={"entertainment"} category={'entertainment'} pageSize={6}/>} />
          <Route exact path="/general" element={<News key={"general"} category={'general'} pageSize={6}/>} />
          <Route exact path="/business" element={<News key={"business"} category={'business'} pageSize={6}/>} />
          <Route exact path="/science" element={<News key={"science"} category={'science'} pageSize={6}/>} />
          <Route exact path="/technology" element={<News key={"technology"} category={'technology'} pageSize={6}/>} />
          </Routes>
      </div>
      </>
    )
  }
}
