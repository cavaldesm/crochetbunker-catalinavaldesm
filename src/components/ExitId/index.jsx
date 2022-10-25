import React, {useEffect, useState} from "react";
import "../Cart/Cart.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Exit from "../Exit";

export const ExitId = () => {
    const [data, setData] = useState({});
    const {ordenId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'orders', '')
        getDoc(queryDoc)
        .then(({id}) => setData(id))
    }, [ordenId])

    return (
        <Exit data={data}/>
    );
}

export default ExitId;