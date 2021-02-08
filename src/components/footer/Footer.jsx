import React from 'react';
import {FindUs} from './FindUs.jsx';
import MapItem from './Map.jsx';

export const Footer = () => {
    return (
        <div>
            <h2>Find Us</h2>
            <div className='hours'> </div>

            <MapItem/>
            <FindUs />
        </div>
    )
}
