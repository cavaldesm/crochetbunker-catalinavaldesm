import './Item.css';
import { Link } from 'react-router-dom';

import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Item = ({info}) => {

    return (
        <Link to={`/detalle/${info.id}`} className='producto'>
            <img src={info.image} alt="" />
        <p>{info.title}</p>
        </Link>
    );
}

export default Item;