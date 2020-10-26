import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.5349749,
      lng: 3.3892993
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyDM9DQOPqmXnIRkdZkAa57rQrWZM-EpOww' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat?this.props.lat:6.5349749}
            lng={this.props.lng?this.props.lng:3.3892993}
            text={this.props.location?this.props.location:"My Location"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

