import React from 'react';
import { withStyles } from 'material-ui/styles';
import {isEmpty} from 'lodash'; 
import GoogleMaps from '../components/googleMaps/GoogleMaps.js';


const styles = theme => ({
    legend: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 50,
        right: 60,
        padding: 10,
        zIndex: 99,
        paddingTop: 0,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    },
    legendItem: {
        marginBottom: 5
    },
    legendText: {
        position: 'relative',
        top: -15
    }
});

class TourLocation extends React.Component {

    getMapSettings(tour) {
        if(isEmpty(tour)){
            return;
        }
        const settings = {
            route: {
                origin: tour.startingPoint,
                destination: tour.destination,
                path: [tour.startingPoint, ...tour.deliveryPoints],
                currentLocation: this.props.gps.location
            }
        };
        return settings;
    }

    render() {
        const {classes} = this.props;
        const mapSettings = this.getMapSettings(this.props.tourDetails);
        return isEmpty(mapSettings) ? null : 
        <div style={{position: 'relative'}}>
            <h2>Tour location</h2>
            <div className={classes.legend}>
                <h4>Legend</h4>
                <div className={classes.legendItem}>
                    <img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"/>
                    <strong className={classes.legendText}>current location</strong>
                </div>
                <div className={classes.legendItem}>
                    <img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"/>
                    <strong className={classes.legendText}>delivery points</strong>
                </div>
            </div>
            <GoogleMaps config={mapSettings}/>
        </div>
    }
}

export default withStyles(styles)(TourLocation);
