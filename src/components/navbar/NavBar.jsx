import React from 'react';
import "./navbar.scss";
import {Link} from 'react-router-dom';

const NavBar = ({amount}) => {
    

    return (
        <div className="NavBar-container">
            <div className="navbar"> 
                <Link to="/">Home</Link> 
                <Link to="/coffee">Coffee</Link>
                <Link to='/menu'>Menu</Link>
                <Link to="/aboutus">About Us</Link>
                <span className='cart-show'>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <span className='amount-container'> 
                <p className='total-amount'>0</p>
            </span>
            </span>
            </div>
        </div>
    )
}
{/* const mapStateToProps = state => {
    console.log(state)
    // return {amount: state.amount}
} */}

export default NavBar;
