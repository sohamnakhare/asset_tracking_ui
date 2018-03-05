import React from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';
import Card, { CardContent } from 'material-ui/Card';
import C3 from 'react-c3js';
import 'c3/c3.css';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        flexGrow: 1
    },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
    },
    textLeft: {
        textAlign: 'left'
    }
});

function renderTemprature(props) {
    const { classes } = props;
    const data = {
        types: {
            Temprature: 'area-spline'
        },
        columns: [
            ['Temprature', 10, 10, 12, 14, 14, 11]
        ]
    };
    return (
        <div className={classes.textLeft}>
            <h2>Temprature Information</h2>
            <div className={classes.root}>
                <C3 data={data}/>
                <div>
                    <h3>Temprature threshole max: 15 &deg;C</h3>
                    <h3>Temprature threshole min: 10 &deg;C</h3>
                    <h3>Average temprature maintained: 11 &deg;C</h3>
                    <h3>Health: <span>Good</span></h3>
                </div>
            </div>
        </div>
    )
}

function renderHumidity(props) {
    const { classes } = props;
    const data = {
        types: {
            Humidity: 'area-spline'
        },
        columns: [
            ['Humidity', 20, 30, 25, 26, 22, 23]
        ]
    };
    return (
        <div className={classes.textLeft}>
            <h2>Humidity Information</h2>
            <div className={classes.root}>
                <C3 data={data}/>
                <div>
                    <h3>Humidity threshole max: 35 g/m<sup>3</sup></h3>
                    <h3>Humidity threshole min: 18 g/m<sup>3</sup></h3>
                    <h3>Average humidity maintained: 25 g/m<sup>3</sup></h3>
                    <h3>Health: Good</h3>
                </div>
            </div>
        </div>
    )
}


function GoodsList(props) {
    if(!props.tourDetails) {
        return;
    }

    const { classes } = props;
    return (
        <div className={classes.textLeft}>
            <h2>Goods</h2>
            <div className={classes.root}>
                {
                    (props.tourDetails.goods || []).map(
                        good => 
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{good.item}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6} md={6}>
                                    {
                                        renderTemprature(props)
                                    }
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    {
                                        renderHumidity(props)
                                    }
                                </Grid>
                            </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                }
            </div>
        </div>
    );
}

export default withStyles(styles)(GoodsList);