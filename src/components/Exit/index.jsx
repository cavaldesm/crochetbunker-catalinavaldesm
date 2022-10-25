import React, {useState} from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import "../Cart/Cart.css";

export const Exit = () => {

    const db = getFirestore();
    const [orderNo, setOrderNo] = useState();
    const ordersCollection = collection(db, 'orders');

    const order = {
        buyer: {
            name: 'Catalina',
            email: 'Catalina@hola.com',
            phone: '12345',
            address: 'Alcorta',
        },
    };
    addDoc(ordersCollection, order).then(({id}) => {
        setOrderNo(id);
    });

    return (
        <div className="cartContainer">
        <p className="cartMessage">¡Muchas gracias por tu compra!</p>
        <p className="cartMessage">Tu n° de orden: {orderNo}</p>
        </div>
    )
}

export default Exit;