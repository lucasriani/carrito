import Item from "./Item"


const ItemList = ({products}) => {
    console.log('Productos en la lista', products)
    return(
        <div>
            {products.map(product =>{
                return(
                <Item 
                key ={product.id}
                description = {product.descripcion}
                category = {product.categoria}
                price = {product.price}
                stock = {product.stock}
                title = {product.title}
                id={product.id}
                />
                )
            })}
        </div>
    )
}

export default ItemList