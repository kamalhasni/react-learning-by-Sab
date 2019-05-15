import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import Body from './components/Body.js'

function App() {
  return (
    <div className="container-scroller">
      <NavBar />
      <div className="container mt-5">
        <Body />
      </div>
    </div>
  );
}

export default App;
