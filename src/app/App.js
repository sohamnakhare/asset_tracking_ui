import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';

import Header from '../components/Header.js';
import Home from '../home/Home.js';
import About from '../about/About.js';
import './App.css';

const styles = {
  root : {
    marginTop: 24
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Header/>
        <main className={classes.root}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>

          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
