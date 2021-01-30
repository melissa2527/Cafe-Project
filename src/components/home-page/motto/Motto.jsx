import React from 'react';
import './motto.scss';

export const Motto = () => {
    return (
        <div className='container'>
            <div className="row">
            <div className="col motto four-square">
                <h2>Our Motto</h2>
                <p>You can't buy happiness</p>
                <p>But you CAN buy coffee</p>
                <p>And that's pretty close</p>
            </div>
            <div className="col four-square img-div">
                <img src='./img/coffeetrio.jpg' alt='Huntington Beach'/>
            </div>
        </div>
        <div className="row">
            <div className="col four-square img-div">
                <img src='./img/huntingtonbeach.jpg' alt='Huntington Beach' />
            </div>
            <div className="col motto four-square">
                <h2>Enjoy</h2>
                <p>Stop in for a nice cup of coffee with a view of the famous Huntington Beach pier.  Since 2010, we have been serving fresh brews and cool gear.</p>
            </div>
        </div>
        </div>
    )
}
