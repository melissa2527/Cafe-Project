import React from 'react';
import {Marker} from 'google-maps-react';

export const LocationPin = () => {
    return (
        <>
            <Marker 
            position= {{
                lat: 33.65886339847452,
                lng: -118.00345439549712
            }}/>
        </>
    )
}
