import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import ItemCount from "../ItemCount";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1 className="titulo">{data.title}</h1>
                    <h1 className="descripcion">{data.descripcion}</h1>
                    <h1>${data.price}</h1>
                    <h1 className="stock"><i>Stock disponible: {data.stock}</i></h1>
                    {
                        goToCart
                        ? <Link className="contentLink" to='/cart'>Terminar compra</Link>
                        :<ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;