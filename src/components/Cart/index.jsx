import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart";
import Formulario from "../Form";
import "../Cart/Cart.css";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Catalina',
            email: 'Catalina@hola.com',
            phone: '12345',
            address: 'Alcorta',
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <div className="cartContainer">
            <p className="cartMessage">No hay elementos en el carrito :-(</p>
            <Link className="cartLink" to='/'>¡Hacer compra!</Link>
            </div>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <div className="itemCart">
        <p className="textCart">Total: ${totalPrice()}</p>   
        </div>
        <div className="itemCart">
            <div>
                <Link className="formLink" to='/formulario'>
                <button onClick={handleClick}>Emitir compra</button>
                </Link>
            </div>
        </div>
        </>
    )

    return (
        <div>Cart</div>
    )
}

export default Cart;