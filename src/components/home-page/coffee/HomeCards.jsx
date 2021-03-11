import React, {useState} from 'react'
import {coffeeItems} from '../../../coffeeItems';
import {Link} from 'react-router-dom';
import './coffee.scss';


export const HomeCards = () => {
    const [current, setCurrent] = useState(0);
    // const coffeePics = coffeeItems.slice(0,4);

    const nextPicture = () => {
        setCurrent(current === coffeeItems.length -1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? coffeeItems.length - 1: current - 1)
    }
    return (
        <div className='coffee-container'>
            {/* <h3>Our Coffee</h3> */}
            {/* <Link to='/coffee' id='link-coffee'> <i class="fas fa-arrow-right"></i></Link> */}
            
            <button onClick={prevPicture} className='left-arrow'><i className="fas fa-arrow-left"></i></button>
            <button onClick={nextPicture} className='right-arrow'><i className="fas fa-arrow-right"></i></button>

            {coffeeItems.map((image, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <div>
                            <img src={image.img} alt='' className='image' />
                            <p>{image.name}</p>
                            </div>
                        )}
                    </div>
                )
            })} 
        </div>
        )
    }

