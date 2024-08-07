import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get exclusive ofeers on your Email</h1>
            <p>Subscribe to our newsletter and star updated</p>
            <div>
                <input type="email" placeholder='Your email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
