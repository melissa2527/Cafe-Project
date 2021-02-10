import React, {useEffect} from 'react';
import {coffeeItems} from '../../coffeeItems';
import {CoffeeCard} from './coffee-components/CoffeeCard.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './coffee.scss';

export const CoffeePage = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

        return (
            <div className='coffee-page'>
            <div className='coffee-title'>
                <h1>Available Blends</h1>
            </div>
            <div className='coffee-section' data-aos='fade-up'>
                {coffeeItems.map(coffee => {
                  return (
                        <div key={coffee.id}>
                        <CoffeeCard coffee={coffee} />
                        </div>
                    )
                })}
            </div>
            </div>
            ) 
           
        
}




