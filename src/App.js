import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header.js';
import SendDiv from './sendDiv.js';
import NotFoundError from './notFoundError.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/login").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path="/dashboard" element={<div className="App"><Header /><SendDiv /></div>} />
        <Route path="*" component={<NotFoundError/>} />
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
