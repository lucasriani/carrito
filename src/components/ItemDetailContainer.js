import { useState, useEffect } from "react"
import { useParams } from "react-router";
import getProducts from "../components/services/handMadePromise"

import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    console.log("item", item);
    console.log(useParams);
    const{ id } = useParams();
    console.log("Id de useParams", id);
    console.log("Tipo de Dato ID", typeof id);

    useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)))
        });
    }, [id]);
    return <>
            <ItemDetail initial={1} item={item} />
            
            </>
};

export default ItemDetailContainer;