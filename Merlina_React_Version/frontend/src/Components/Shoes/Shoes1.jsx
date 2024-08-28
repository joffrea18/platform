import React from 'react';
import './Shoes1.css';
import individual_sandals from '../Assets/individual_sandals.js';
import Item from '../Item/Item';

const Shoes1 = () => {
    return (
        <div className='shoes-data'>
            <h1>Shoes</h1>
            <hr />
            <div className="shoes-item">
                {individual_sandals.map((item, i) => {
                    return <Item key={i} id={item.id}
                                name={item.name} img={item.image}
                                new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default Shoes1;