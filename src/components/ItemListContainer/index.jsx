import React, {useEffect, useState} from "react";
import Title from "../Title/title";

import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const productos = [
    { id: 1, category: "productos", descripcion: "Suéter de colores cálidos, tejido a crochet con mangas globo y puños, que incluye aplicación de botones.", price: 15990, stock: 10, image: "https://i.pinimg.com/originals/2f/73/0e/2f730e93b6a6f8f48a18afa03ad96990.jpg", title: "Suéter Bonnie"},
    { id: 2, category: "ofertas", descripcion: "Suéter de cuatro colores, tejido a crochet con mangas globo y puños, que incluye aplicación de botones acorde a la paleta de colores.", price: 12590, stock: 5, image: "https://i.pinimg.com/originals/58/0b/e3/580be3ac4f546fd4bc362f2fa994da85.jpg", title: "Suéter Ice"},
    { id: 3, category: "productos", descripcion: "Suéter de color blanco y dos tonalidades de violeta, tejido a crochet, con mangas globo y puños, con aplicación de botones.", price: 22690, stock: 3, image: "https://i.pinimg.com/736x/a7/42/08/a742083dc1302d2e29697680d93bfe88.jpg", title: "Suéter Marshmallow"},
    { id: 4, category: "ofertas", descripcion: "Suéter tejido a crochet, multicolor, con aplicación de figura, perfecto para la temporada de Halloween.", price: 15990, stock: 7, image: "https://i.etsystatic.com/28468919/r/il/649140/3443739835/il_794xN.3443739835_1u3q.jpg", title: "Suéter Spooky"},
    { id: 5, category: "productos", descripcion: "Suéter tejido a palillo de color rosa, con los puños y el cuello tejidos a crochet en lana de color violeta.", price: 23950, stock: 3, image: "https://i.etsystatic.com/28468919/r/il/fab51e/3837797868/il_794xN.3837797868_brqd.jpg", title: "Suéter Candy"},
    { id: 6, category: "ofertas", descripcion: "Suéter de patchwork tejido a crochet.", price: 13560, stock: 4, image: "https://i.pinimg.com/564x/b2/9c/11/b29c1162adb6eedd24c833b43c262f97.jpg", title: "Suéter Breeze"},
    { id: 7, category: "ofertas", descripcion: "Suéter corto de tonalidades pastel, con mangas globo, puños holgados y aplicación de botones", price: 14970, stock: 3, image: "https://i.etsystatic.com/28468919/r/il/dd45e4/3819567118/il_794xN.3819567118_fn87.jpg", title: "Suéter Baby"},
    { id: 8, category: "productos", descripcion: "Suéter oversized de tonalidades verdes, con componentes tejidos a crochet y otros a pallilo, con mangas globo, puños cerrados y aplicación de botones.", price: 24560, stock: 20, image: "https://i.etsystatic.com/28468919/r/il/23d499/3982991523/il_794xN.3982991523_k8dy.jpg", title: "Suéter Willow"},
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