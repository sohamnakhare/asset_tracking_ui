import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Header from '../components/Header.js';
import SearchTours from '../searchtours/SearchTours.js';
import TourDetails from '../tourDetails/TourDetails.js';
import './App.css';

const styles = {
  root : {
    marginTop: 24,
    padding: 50,
    paddingTop: 0
  }
}

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <main className={classes.root}>
            <Route exact path="/" component={SearchTours} />
            <Route exact path="/tour-details/:tourId" component={TourDetails} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
