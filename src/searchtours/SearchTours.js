import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {
                        this.props.tours.map((tour, i) =>
                            <TourWidget key={i} {...tour}/>
                        )
                    }
                </Grid>
            </div>
        )
    }
}

export default ToursDataProvider(
    withStyles(styles)(SearchTours)
);