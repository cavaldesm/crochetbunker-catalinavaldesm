import React, { useContext } from "react";
import { useCartContext } from "../../Context/CartContext";

export const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <>
        <i className="bi bi-bag-heart"></i>
        <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget;