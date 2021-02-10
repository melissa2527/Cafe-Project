import React, {useEffect} from 'react';
import './aboutus.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const AboutUsPage = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className='about-us-container'>
           <h1 className='title'>About Us</h1>

           <div className='content'>

                <div className='story-container'>
                    <div className='story-text' data-aos='fade-right'>
                    <h4>Our Story</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eveniet aperiam amet sit earum, animi est laudantium quisquam quos eligendi voluptatibus architecto, repudiandae provident accusantium nesciunt quae magni? Aut, blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium exercitationem aspernatur sapiente eius ab soluta tempora atque enim quae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, in? Soluta dolorem magni eaque et quis cupiditate corrupti blanditiis sunt dicta quas aliquid tempore facilis quia ducimus deserunt, dignissimos quisquam!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas atque asperiores ducimus porro corrupti ex, accusantium ipsa beatae praesentium maxime.</p>
                    </div>
                </div>


                <div className='video-container' data-aos='fade-left'>
                    <h4>Coffee Basics</h4>
                    <iframe width="600" height="415" title='coffee-video'
                    src="https://www.youtube.com/embed/vFcS080VYQ0?autoplay=1&mute=1">
                    </iframe>
                </div>
            </div>
        </div>
    )
}
