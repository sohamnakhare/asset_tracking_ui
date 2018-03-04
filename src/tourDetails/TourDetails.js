import React from 'react';
import { withStyles } from 'material-ui/styles';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import dataProvider from './TourDetailsDataProvider.js';
import TourLocation from './TourLocation.js';
import GoodsList from './GoodsList.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 12
    },
    textLeft: {
        textAlign: 'left'
    }
});

class TourDetails extends React.Component {

    componentDidMount() {
        const tourId = this.props.tourId;
        const startDate = this.props.startDate;
        this.props.getTourDetails(tourId);
        setInterval(()=>{
            this.props.getCurrentLocation(this.props.tourDetails.tourId, this.props.tourDetails.truckId);
        }, 1000 * 10);
    }

    showGoodsDetails(goods) {
        console.log('goods: ', goods);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TourLocation {...this.props}/>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={12}>
                            <GoodsList 
                                tourDetails = {this.props.tourDetails}
                                showGoodsDetails={this.showGoodsDetails}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        tourId: ownProps.match.params.tourId,
        startDate: ownProps.match.params.startDate,
    }
}

let component = withStyles(styles)(TourDetails);
component = dataProvider(component);

export default connect(
    mapStateToProps
)(component);