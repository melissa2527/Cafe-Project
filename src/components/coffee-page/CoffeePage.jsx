import React from 'react';
import {coffeeItems} from '../../coffeeItems';
import {CoffeeCard} from './coffee-components/CoffeeCard.jsx';
import './coffee.scss';

export const CoffeePage = () => {


        return (
            <div className='coffee-page'>
                <div className='coffee-title'>
                    <h1>Available Blends</h1>
                </div>
                
                <div className='coffee-section'>
                    {coffeeItems.map(coffee => {
                        return (
                            <div>
                            <CoffeeCard key={coffee.id} coffee={coffee} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}


