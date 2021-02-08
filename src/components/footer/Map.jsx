import React, {Component} from 'react';
import './footer.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import REACT_APP_GOOGLE_MAPS_API_KEY from '../../config.js';

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
    apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapItem);
