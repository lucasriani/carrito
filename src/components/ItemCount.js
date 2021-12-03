/*import { useState } from "react";
import { Button} from "@mui/material";

const ItemCount = ({stock, initial}) => {


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
        <>
        <div>
            <button onClick={agregarItem}>+</button>
            <h3>{count}</h3>
            <button onClick={quitarItem}>-</button>
        </div><br></br>
        <Button onClick={onAdd} variant="contained" disableElevation> Agregar al carrito</Button>
        

        </>

        
    );
};

export default ItemCount;*/