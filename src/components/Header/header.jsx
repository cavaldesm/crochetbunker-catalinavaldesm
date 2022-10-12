import React from 'react';
import './Header.css';
import img from './banner1.png';

const Header = () => {
    return (
        <div className="Header">
            <img src={img} alt="logo"/>
        </div>
    )
}

export default Header;