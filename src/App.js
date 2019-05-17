import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Body from './components/Body.js'
import About from './components/About.js'

function App() {
    return (
        <Router>
            <div className="container-scroller">
                <NavBar />
                <div className="container mt-5">
                    <Body />
                </div>
            </div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </Router>
    );
}

export default App;
