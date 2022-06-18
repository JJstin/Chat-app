import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header.js';
import SendDiv from './sendDiv';


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
      <Header/>
      <SendDiv/>
    </div>
  );
}

export default App;
