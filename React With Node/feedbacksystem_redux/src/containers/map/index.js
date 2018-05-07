import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './map.css';

import Autocomplete from 'react-google-autocomplete';

const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
export default class Map extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
        coords : {
            lat: 51.5258541,
            lng: -0.08040660000006028
          }
    }
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
      <div>
        <Autocomplete
            style={{width: '90%'}}
            onPlaceSelected={(place) => {
                this.setState({
                    coords: { 
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    }
                })
            }}
            types={['(regions)']}
            componentRestrictions={{country: "ind"}}
        />
        <Gmaps
            width={'800px'}
            height={'600px'}
            lat={this.state.coords.lat}
            lng={this.state.coords.lng}
            zoom={12}
            loadingMessage={'Be happy'}
            params={params}
            onMapCreated={this.onMapCreated}>
            <Marker
            lat={this.state.coords.lat}
            lng={this.state.coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
        </Gmaps>
      </div>
    );
  }
};
 