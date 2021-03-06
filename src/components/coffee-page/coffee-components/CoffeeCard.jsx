import React from 'react';
import {Like} from './Like.jsx';
import Info from './Info.jsx';


export const CoffeeCard = ({coffee}) => {

    return (
        <div className='coffee-card'>
            
            <div>
                <img className='coffee-img' src={coffee.img} alt={coffee.name}/>
            </div>

            <div className='coffee-info'>
                <div className='coffee-text'>
                    <div>
                        <span>{coffee.name.toUpperCase()}</span>
                        <span className='float-right'>{coffee.price}</span>
                    </div>
                    <Info info={coffee.info}/>
                </div>
                
                <div>
                    <Like name={coffee.name}/>
                    <div className='button'>
                        {/* <button>Buy</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
