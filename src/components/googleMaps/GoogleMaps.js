import React, {Component} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import {isEmpty, round} from 'lodash';

class GoogleMaps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapId: props.mapId || 'map',
            googleMaps: {},
            markers: []
        };
    }

    componentDidMount() {
        this.renderMap(this.props);
    }

    componentWillReceiveProps(newProps) {
        isEmpty(this.state.googleMaps) ?
        (()=>{})() :
        this.renderRoutes(this.state.googleMaps, this.state.map, newProps);
    }

    renderMap(props) {
        const self = this;
        loadGoogleMapsApi({key: 'AIzaSyAoQgDAxFzs2M64R8Bot1NyUe0K59cBMgM'})
        .then(function (googleMaps) {
            const map = new googleMaps.Map(document.querySelector(`#${self.state.mapId}`), {
              zoom: 12
            });
            self.setState({googleMaps, map}, ()=>{
                self.renderRoutes(googleMaps, map, props);
            });
          }).catch(function (error) {
            console.error(error)
          });
    }

    renderRoutes(googleMaps, map, props) {
        const settings = {};
        const directionsService = new googleMaps.DirectionsService;
        const directionsDisplay = new googleMaps.DirectionsRenderer;
        //set map in direction display obj
        directionsDisplay.setMap(map);
        // path settings
        settings.origin = new googleMaps.LatLng (...props.config.route.origin);
        settings.dest = new googleMaps.LatLng (...props.config.route.destination);
        const path = props.config.route.path;
        path.push(props.config.route.origin);
        path.push(props.config.route.destination);
        settings.wayPoints = [];
        path.forEach((path)=>{
            settings.wayPoints.push({
                location: new googleMaps.LatLng(...path),
                stopover: true
            })
        });
        this.renderCurrentLocation(props);
        this.renderDirections(directionsService, directionsDisplay, settings);
    }

    renderCurrentLocation(props) {
        const currentLocation = props.config.route.currentLocation;
        if (!currentLocation) {
            return;
        }
        const markers = this.state.markers;
        // if the last markers position is same as current position
        // do not update the map
        if (markers.length > 0) {
            const currentMarker = markers[markers.length-1];
            const currentMarkerLoc =  [round(currentMarker.position.lat(), 4),
                round(currentMarker.position.lng(), 4)];
            if(currentLocation[0] === currentMarkerLoc[0]
                && currentLocation[1] === currentMarkerLoc[1]) {
                return;
            }
        }

        this.clearMapOnAllMarkers(markers);

        const marker = new this.state.googleMaps.Marker({
            position: new this.state.googleMaps.LatLng(...currentLocation),
            map: this.state.map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: 'current location',
        });
        markers.push(marker);
        this.setState({markers});
    }

    clearMapOnAllMarkers(markers=[]) {
        markers.forEach((marker)=>{
            marker.setMap(null);
        });
    }

    renderDirections(directionsService, directionsDisplay, settings) {
        directionsService.route({
            origin: settings.origin,
            destination: settings.dest,
            waypoints: settings.wayPoints,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
        });
    }

    render() {
        return (
            <div style={{height: '300px'}} id={this.state.mapId}></div>
        )
    }
}

export default GoogleMaps;