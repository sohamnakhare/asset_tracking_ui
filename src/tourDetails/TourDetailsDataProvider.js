import React from 'react';
import axios from 'axios';
import {apiBaseUrl} from '../constants.js';

function dataProvider(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          trucks: []
        };

        this.getTrucks = this.getTrucks.bind(this);
      }

      getTrucks(tourId, startDate) {
        const url = apiBaseUrl + '/truck?tourId='+tourId+'&startDate='+startDate;
        axios.get(url)
        .then((res)=>{
            console.log('res: ', res);
          this.setState({trucks: res.data});
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
              getTrucks={this.getTrucks}/>
          );
      }
    }
}

export default dataProvider;