import React from 'react';
import axios from 'axios';
import {apiBaseUrl} from '../constants.js';

function dataProvider(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          tourDetails: {},
          gps: {}
        };

        this.getTourDetails = this.getTourDetails.bind(this);
        this.getCurrentLocation = this.getCurrentLocation.bind(this);
      }

      getTourDetails(tourId) {
        const url = apiBaseUrl + `/tours/${tourId}`
        axios.get(url)
        .then((res)=>{
          this.setState({tourDetails: res.data});
        })
        .catch((err)=>{
          console.log('error: ', err)
        });
      }

      getCurrentLocation(tourId, truckId) {
        const url = apiBaseUrl + `/gps/${tourId}/${truckId}?latest=true`;
        axios.get(url)
        .then((res)=>{
          this.setState({gps: res.data});
        })
        .catch((err)=>{
          console.log('error: ', err)
        });
      }

      render (){
          return (
            <WrappedComponent
              {...this.props}
              {...this.state}
              getTourDetails={this.getTourDetails}
              getCurrentLocation={this.getCurrentLocation}/>
          );
      }
    }
}

export default dataProvider;