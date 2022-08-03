import React, { useEffect } from 'react';
import './App.css';
import Header from './header.js';
import SendDiv from './sendDiv.js';
import NotFoundError from './notFoundError.js'
import useToken from './useToken.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './mainPage';
import Login from './login';
import Signup from './signup';


function App() {
  //const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/login").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       //setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  const { token, removeToken, setToken } = useToken();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<div className="App"><Header /><SendDiv /></div>} />
        <Route path="/login" element={<Login setToken={setToken} token={token} removeToken={removeToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFoundError/>} />
      </Routes>
    </Router>

  );
}

export default App;
