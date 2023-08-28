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
          <Route path="/" element={<News category={'general'} pageSize={6}/>} />
          <Route path="/health" element={<News category={'health'} pageSize={6}/>} />
          <Route path="/entertainment" element={<News category={'entertainment'} pageSize={6}/>} />
          <Route path="/general" element={<News category={'general'} pageSize={6}/>} />
          <Route path="/us" element={<h1>heyyy</h1>} />
        </Routes>
      </div>
      </>
    )
  }
}
