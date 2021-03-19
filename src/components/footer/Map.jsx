import React, {Component} from 'react';
import './footer.scss';
import {LocationPin} from './LocationPin.jsx';
import { Map, GoogleApiWrapper} from 'google-maps-react';
require('dotenv').config();
console.log(process.env);

class MapItem extends Component{

render() {
    return (
        <div style={{
            position: "absolute",
            left: '20%',
            width: "25%",
            height: "300px"}} >

            <Map google={this.props.google} 
                zoom={15}
                initialCenter={{ lat: 33.6595, lng: -117.9988}}
                disableDefaultUI= {true}>
                <LocationPin/>
            </Map>
        </div>
    );
}}


export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY
})(MapItem);
