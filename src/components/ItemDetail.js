import { useState } from "react";
import { Button} from "@mui/material";

const ItemDetail = (props) => {
    const { title, price, descripcion, stock, initial} = props.item;
    
    
    const [count, setCount] = useState(initial)

    const agregarItem = () =>{
        const newValue = count + 1;
        if(newValue <= stock) {
            setCount (newValue)
        }
    }

    const quitarItem = () =>{
        const newValue = count - 1;
        if (newValue >= initial){
            setCount (newValue)
        }
        
    }

    const onAdd = () =>{
        const mensaje = `Agregaste ${count} producto`;
        count === 1 ? alert(mensaje) : alert (`${mensaje}s`)

    }

    
    return ( 
        <div>
            <h3>{title}</h3>

            <h2>{price}</h2>
            <p>{descripcion}</p>
            <p>{stock}</p>
            <button onClick={agregarItem}>+</button><br/>
            <h3>{count}</h3>
            <button onClick={quitarItem}>-</button><br/><br/>
            <Button onClick={onAdd} variant="contained" disableElevation> Agregar al carrito</Button>
            
        </div>
    );
};
export default ItemDetail;