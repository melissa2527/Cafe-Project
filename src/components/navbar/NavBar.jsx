import React from 'react';
import "./navbar.scss";
import {Link} from 'react-router-dom';

const NavBar = ({amount}) => {
    

    return (
        <div className="navbar-container">
            <div className="navbar"> 
                <Link to="/" className='link'>Home</Link> 
                <Link to="/coffee" className='link'>Coffee</Link>
                <Link to='/menu' className='link'>Menu</Link>
                <Link to="/aboutus" className='link'>About Us</Link>
                <Link to='/contact' className='link'>Contact</Link>
                {/* <span className='cart-show link'>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <span className='amount-container'> 
                <p className='total-amount'>0</p> */}
            {/* </span>
            </span> */}
            </div>
        </div>
    )
}
{/* const mapStateToProps = state => {
    console.log(state)
    // return {amount: state.amount}
} */}

export default NavBar;
