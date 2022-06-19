import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header.js';
import SendDiv from './sendDiv';

import {
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
    <div className="App">
      <Routes>
      <Route path="/">
        <Route path="dashboard" element={<><Header /><SendDiv /></>} />
      </Route>
    </Routes>

    </div>
  );
}

export default App;
