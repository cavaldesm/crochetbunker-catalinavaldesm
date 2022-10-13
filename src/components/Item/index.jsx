import './Item.css';
import { Link } from 'react-router-dom';

import React from 'react';

const Item = ({info}) => {

    return (
        <div className='itemContainer'>
        <Link to={`/detalle/${info.id}`} className='productos'>
            <img src={info.image} alt="" />
        <p>{info.title}</p>
        <p>${info.price}</p>
        </Link>
        </div>
    );
}

export default Item;