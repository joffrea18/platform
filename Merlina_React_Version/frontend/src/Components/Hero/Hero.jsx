import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/handhello_icon.jpeg';
import arrow_icon from '../Assets/arrow.png';
import foot_black from '../Assets/foots_black.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand icon" />
                </div>
                <p>collection</p>
                <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
            </div>
            <div className="hero-right">
                <img src={foot_black} alt="foot" />
            </div>
        </div>
    );
}

export default Hero;
