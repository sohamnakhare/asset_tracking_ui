import React from 'react';
import {isEmpty} from 'lodash'; 
import GoogleMaps from '../components/googleMaps/GoogleMaps.js';

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
        const mapSettings = this.getMapSettings(this.props.tourDetails);
        return isEmpty(mapSettings) ? null : <GoogleMaps config={mapSettings}/>
    }
}

export default TourLocation;
