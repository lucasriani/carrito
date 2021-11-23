
import { useEffect, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";



const ItemListContainer = ({greeting}) => {
    const data = [
        {
            "id": 1,
            "title":"Mesa Ratona",
            "Descripcion":"este es el primer producto",
            "categoria": "mesa",
            "price": "12000",
            "stock": "10"
        },

        {
            "id": 2,
            "title":"Velador",
            "Descripcion":"este es el segundo  producto",
            "categoria": "mesa",
            "price": "300",
            "stock": "3"
        },

        {
            "id": 3,
            "title":"Mesa Ratona",
            "Descripcion":"este es el tercer producto",
            "categoria": "mesa",
            "price": "12000",
            "stock": "10"
        }
    ]

    const [products, setProducts] = useState([])
    console.log('Los productos en el hook', products)

    useEffect(() => {
        handPromise
        .then(res =>{
            setProducts(res)
        })
        .catch(err => alert('hay un error', err))
    },[])



const handPromise = new Promise ((resolve, reject) => {
    resolve(data)
    reject('Algo fallo')
})


    return (
        <>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1} />
        <Item/>
        
        </>
    )
}

export default ItemListContainer;