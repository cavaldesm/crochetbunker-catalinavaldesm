import React, {useEffect, useState} from "react";
import Title from "../Title/title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const productos = [
    { id: 1, image: "https://i.pinimg.com/736x/52/98/4b/52984b18fe87c60f09e2acca2a00bc4f.jpg", title: "Uno"},
    { id: 2, image: "https://i.pinimg.com/originals/cb/4e/25/cb4e25c0159264e19a67757e8c74667f.jpg", title: "Dos"},
    { id: 3, image: "https://i.pinimg.com/originals/b9/9f/c7/b99fc7d6b9db684eb139a95be86bd6eb.jpg", title: "Tres"},
];

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste {quantity} unidades`);
    }

    return (
        <>        
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;