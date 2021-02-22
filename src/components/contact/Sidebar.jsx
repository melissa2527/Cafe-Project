import React from 'react';
import './contact.scss';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <div className='sidebar' style={{left: isOpen ? 50 : -1000}}>
            
            <i class="fas fa-times" onClick={toggle}></i>
            <div className='sidebar-menu'>
                <p className='item'>One</p>
                <p className='item'>Two</p>
            </div>
        </div>
    )
}
