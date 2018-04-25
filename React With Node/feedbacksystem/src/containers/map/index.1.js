import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};
 
const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
export default class Map extends React.Component {
 
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
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
          <Marker
          lat={51.4258541}
          lng={-0.07040660000006028}
          draggable={true}
          onDragEnd={this.onDragEnd} />
          <Marker
          lat={51.6258541}
          lng={-0.09040660000006028}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }
};
 