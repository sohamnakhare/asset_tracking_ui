import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import Home from '../home/Home.js';
import About from '../about/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>

          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
