import {Link} from "react-router-dom"
const Item = ({description, price, stock, title, id}) =>{

    return(
        <Link to={`/item/${id}`}>
        <div>
            <h3>Titulo: {title}</h3>
            <h2>Precio: {price}</h2>
            <p>Descripcion: {description}</p>
            <p>Stock: {stock}</p>
        </div>
        </Link>
    )
}

export default Item