
import { useEffect, useState } from "react";

//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getProducts from "./services/handMadePromise";



const ItemListContainer = ({greeting}) => {


    const [products, setProducts] = useState([])

    const getProductsFetch = () => {
        fetch("../JSON/DataList.json").then((response) => response.json())
        .then((data) => console.log("ver la data", data))
        
};
    useEffect(() =>{
        setTimeout(() => getProductsFetch(), 2000);
        getProducts
        .then((res) => setProducts(res))
        .catch((err) => alert('hay un error', err));
    }, []);

    /*useEffect(() => {
        getProducts
        .then(res =>{
            setProducts(res)
        })
        .catch(err => alert('hay un error', err))
    },[])*/


    return (
        <>
        <h3>{greeting}</h3>
        
        <ItemList products = {products}/>
        
        </>
        
    )
}

export default ItemListContainer;