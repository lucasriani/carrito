
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import getProducts from "./services/handMadePromise";
import ItemList from "./ItemList";



const ItemListContainer = ({greeting}) => {


    const [products, setProducts] = useState([])
    console.log('Los productos en el hook', products)

    useEffect(() => {
        getProducts
        .then(res =>{
            setProducts(res)
        })
        .catch(err => alert('hay un error', err))
    },[])


    return (
        <>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1} />
        <ItemList products = {products}/>
        
        </>
    )
}

export default ItemListContainer;