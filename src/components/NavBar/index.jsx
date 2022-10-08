import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <NavLink className="nav_link" to='/'>Mi Marca</NavLink>
            </div>
            <ul className="nav_list">
                <li>
                    <NavLink className="nav_link" to='/categoria/productos'>Productos</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to='/categoria/ofertas'>Ofertas</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to='cart'>
                        <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    );
}

export default NavBar;