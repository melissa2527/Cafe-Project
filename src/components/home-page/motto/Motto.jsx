import React, {useEffect} from 'react';
import './motto.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Motto = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='container'>
            <div className="row">
            <div className="col motto four-square" data-aos='fade-up'>
                <h2>Our Motto</h2>
                <p>You can't buy happiness</p>
                <p>But you CAN buy coffee</p>
                <p>And that's pretty close</p>
            </div>
            <div className="col four-square img-div" data-aos='fade-right'>
                <img src='./img/coffeetrio.jpg' alt='Huntington Beach'/>
            </div>
        </div>
        <div className="row">
            <div className="col four-square img-div" data-aos='fade-left'>
                <img src='./img/huntingtonbeach.jpg' alt='Huntington Beach' />
            </div>
            <div className="col motto four-square" data-aos='fade-down'>
                <h2>Enjoy</h2>
                <p>Stop in for a nice cup of coffee with a view of the famous Huntington Beach pier.  Since 2010, we have been serving fresh brews and cool gear.</p>
            </div>
        </div>
        </div>
    )
}
