import React, {useEffect, useState} from "react";
import Title from "../Title/title";

import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const productos = [
    { id: 1, price: 100, image: "https://i.pinimg.com/736x/52/98/4b/52984b18fe87c60f09e2acca2a00bc4f.jpg", category: "productos", title: "Uno"},
    { id: 2, price: 120, image: "https://i.pinimg.com/originals/cb/4e/25/cb4e25c0159264e19a67757e8c74667f.jpg", category: "ofertas", title: "Dos"},
    { id: 3, price: 130, image: "https://i.pinimg.com/originals/b9/9f/c7/b99fc7d6b9db684eb139a95be86bd6eb.jpg", category: "productos", title: "Tres"},
];

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(producto => producto.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    
    }, [categoriaId])

    return (
        <>        
        <Title greeting={texto} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;