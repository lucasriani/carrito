const Item = ({description, price, stock, title}) =>{

    return(
        <div>
            <h3>Titulo: {title}</h3>
            <h2>Precio: {price}</h2>
            <p>Descripcion: {description}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item