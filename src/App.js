import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'

function App() {   
    return (
      <div className="container-scroller">
        <Router>
          <NavBar />
          <div className="container mt-5">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </div>          
        </Router>
      </div>
  );
}

export default App;
