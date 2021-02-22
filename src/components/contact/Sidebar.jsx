import React from 'react';
import './contact.scss';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <div className='sidebar' style={{left: isOpen ? 350 : -350}}>
            
            <i class="fas fa-times" toggle={toggle}></i>
            <div className='sidebar-menu'>
                <p className='item'>One</p>
                <p className='item'>Two</p>
            </div>
        </div>
    )
}
