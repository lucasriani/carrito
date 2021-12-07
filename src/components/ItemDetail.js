import { useState } from "react";
import { Button} from "@mui/material";

const ItemDetail = (props) => {
    const { title, price, descripcion, stock,initial} = props.item;
    
    
    const [contador, setContador] = useState(1,initial)
    console.log(contador)

    const agregarItem = () =>{
        const newValue = contador + 1;
        if(newValue <= stock) {
            setContador(newValue);
        }
    }

    const quitarItem = () =>{
        const newValue = contador - 1;
        if(newValue >= initial) {
            setContador(newValue);
        }
        
    }

    const onAdd = () =>{
        const mensaje = `Agregaste ${contador} producto`;
        contador === 1 ? alert(mensaje) : alert (`${mensaje}s`)

    }

    
    return ( 
        <div>
            <h3>{title}</h3>

            <h2>{price}</h2>
            <p>{descripcion}</p>
            <p>{stock}</p>
            <button onClick={agregarItem}>+</button><br/>
            <h3>{contador}</h3>
            <button onClick={quitarItem}>-</button><br/><br/>
            <Button onClick={onAdd} variant="contained" disableElevation> Agregar al carrito</Button>
            
        </div>
    );
};
export default ItemDetail;