import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import moment from 'moment';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        cursor: 'pointer'
    },
    bottomSpacing: {
        marginBottom: 8
    }
});

function TourWidget(props) {
    const { classes } = props;
    return (
        <Grid item xs={12} sm={4} md={3}>
            <Paper {...props} className={classes.paper}>
                <div className={classes.bottomSpacing}>
                    <strong>{props.tourName}</strong>
                </div>
                <div className={classes.bottomSpacing}>
                    <strong>Start Date: </strong>{moment(props.tourStartDate).format('DD-MMM-YYYY')}
                </div>
            </Paper>
        </Grid>
    );
}

export default withStyles(styles)(TourWidget);