const ItemDetail = (props) => {
    const { title, price, descripcion, stock} = props.item;
    return ( 
        <div>
            <h3>ItemDetail</h3>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{descripcion}</p>
            <p>{stock}</p>
        </div>
    );
};
export default ItemDetail;