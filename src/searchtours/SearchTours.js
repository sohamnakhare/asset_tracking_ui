import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import TourWidget from './TourWidget.js';
import ToursDataProvider from './ToursDataProvider.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 12
    }
});

class SearchTours extends Component {

    componentDidMount() {
        this.props.getTours();
    }

    viewTourDetails(tour) {
        console.log('tour: ', tour);
        this.props.history.push(`/tour-details/${tour._id}`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {
                        this.props.tours.map((tour, i) =>
                            <TourWidget key={i}
                                 {...tour}
                                 onClick={this.viewTourDetails.bind(this, tour)}/>
                        )
                    }
                </Grid>
            </div>
        )
    }
}

let component = withRouter(SearchTours);
component = withStyles(styles)(component);
export default ToursDataProvider(component);