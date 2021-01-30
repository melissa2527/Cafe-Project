import React from 'react';
import './menu.scss';
import {MenuList} from './MenuList.jsx';

export const Menu = () => {
    return (
            <div className='menu-page'>
                <h1>Menu</h1>
                <div className='menu-items'>
                        <img src='/img/coffeecanva.png' alt='coffee' width='400'/>
                        <MenuList />
                </div>
            </div>
    )
}
