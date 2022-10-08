import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const producto = { id: 1, image: "https://i.pinimg.com/736x/52/98/4b/52984b18fe87c60f09e2acca2a00bc4f.jpg", title: "Uno"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);    
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;