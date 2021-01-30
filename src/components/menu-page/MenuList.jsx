import React from 'react';
import menuItems from './menuItems';
import './menu.scss';

export const MenuList = () => {
    return (
        <div>
            {menuItems.map((item, index) => {
                return (
                    <div key={index + 1} className='menu-list-items'>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                    </div>
                )
            })}
        </div>
    )
}
