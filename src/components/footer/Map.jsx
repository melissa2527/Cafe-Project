import React, {Component} from 'react';
import './footer.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapItem extends Component{

render() {
    return (
        <div style={{
                position: "relative",
                width: "20%",
                height: "300px"}} 
            className="map">

            <Map google={this.props.google} 
                zoom={15}
                initialCenter={{ lat: 33.6595, lng: -117.9988}}
                disableDefaultUI= {true}>
            </Map>
        </div>
    );
}}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyA9Eg0cXQUEzs6aA-0oOVmcrXW38HINliQ'
})(MapItem);
