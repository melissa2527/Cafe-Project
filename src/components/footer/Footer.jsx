import React from 'react';
import {FindUs} from './FindUs.jsx';
import MapItem from './Map.jsx';
import './footer.scss';

export const Footer = () => {
    return (
        <div className='find-us'>
            <h2>Find Us</h2>

            <div className='info'>
                <MapItem/>

                <div className='text'>
                    <div className='hours'> 
                        <h6>Hours</h6>
                        <p>M-F 7:00am - 8:00pm</p>
                        <p>Sa-Su 7:00am - 5:00pm</p>
                    </div>
                    <div className='address'>
                        <h6>Address</h6>
                        <p>1234 Pacific Coast Highway</p>
                        <p>Huntington Beach, CA 92646</p>
                    </div>
                </div>
            </div>
           
            <FindUs />
        </div>
    )
}
