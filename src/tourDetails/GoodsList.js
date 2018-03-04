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
            data1: 'area-spline'
        },
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250]
        ]
    };
    return (
        <div className={classes.textLeft}>
            <h2>Temprature Information</h2>
            <Card className={classes.root}>
                <C3 data={data}/>
                <CardContent>
                    <h3>Temprature threshole max: 1000</h3>
                    <h3>Temprature threshole min: 800</h3>
                    <h3>Average temprature maintained: 890</h3>
                    <h3>Health: Good</h3>
                </CardContent>
            </Card>
        </div>
    )
}

function renderHumidity(props) {
    const { classes } = props;
    const data = {
        types: {
            data2: 'area-spline'
        },
        columns: [
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    };
    return (
        <div className={classes.textLeft}>
            <h2>Humidity Information</h2>
            <Card className={classes.root}>
                <C3 data={data}/>
                <CardContent>
                    <h3>Humidity threshole max: 1000</h3>
                    <h3>Humidity threshole min: 800</h3>
                    <h3>Average humidity maintained: 890</h3>
                    <h3>Health: Good</h3>
                </CardContent>
            </Card>
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