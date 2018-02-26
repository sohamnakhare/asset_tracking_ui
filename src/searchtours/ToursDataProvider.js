import React from 'react';
import axios from 'axios';
import {apiBaseUrl} from '../constants.js';

function dataProvider(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          tours: []
        };

        this.getTours = this.getTours.bind(this);
      }

      getTours() {
        const url = apiBaseUrl + '/tours';
        axios.get(url)
        .then((res)=>{
          this.setState({tours: res.data});
        })
        .catch((err)=>{
          console.log('error: ', err)
        });
      }

      render (){
          return (
            <WrappedComponent
              {...this.state}
              getTours={this.getTours}/>
          );
      }
    }
}

export default dataProvider;