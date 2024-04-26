import React from 'react'
import './Hero.css'
import shop from './shop.jpeg'

function Hero() {
    return (  
        <div className="hero">

            <div className="hero-left">
                <h2>CRAZY DEALS</h2>
                <div className='hero-mid'>
                    <p>offer to
                    Upgrade
                    Your Style&#x1F452;</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                   
                </div>
            </div>
            <div className="hero-right">
                <img src={shop} alt="ladys" />

                </div>

        </div>
    );
}

export default Hero;