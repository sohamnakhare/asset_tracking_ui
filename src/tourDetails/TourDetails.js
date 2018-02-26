import React from 'react';
import {connect} from 'react-redux';
import TruckList from './TrucksList.js';
import dataProvider from './TourDetailsDataProvider.js';

class TourDetails extends React.Component {

    componentDidMount() {
        debugger;
        const tourId = this.props.tourId;
        const startDate = this.props.startDate;
        this.props.getTrucks(tourId, startDate);
    }

    render() {
        return (
            <TruckList trucks={this.props.trucks}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        tourId: ownProps.match.params.tourId,
        startDate: ownProps.match.params.startDate,
    }
}

export default connect(
    mapStateToProps
)(dataProvider(TourDetails));