import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { BRANCHES } from '../../data';

const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};

export default class Map extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
        coords : {
            lat: 17.4374117,
            lng: 78.36623039999994
        },
        branches: BRANCHES
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
        <Gmaps
        width={'800px'}
        height={'600px'}
        lat={this.state.coords.lat}
        lng={this.state.coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
            {this.state.branches.map(branch => {
                return <Marker
                lat={branch.lat}
                lng={branch.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />
            })}
        </Gmaps>
    );
  }
};
 