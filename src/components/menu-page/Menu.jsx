import React, {useEffect} from 'react';
import './menu.scss';
import {MenuList} from './MenuList.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Menu = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    })

    return (
            <div className='menu-page'>
                <h1>Menu</h1>
                <div className='menu-items'>
                        <img src='/img/coffeecanva.png' alt='coffee' width='400'data-aos='fade-right'/>
                        <div data-aos='fade-left'>
                            <MenuList/>
                        </div>
                </div>
            </div>
    )
}
