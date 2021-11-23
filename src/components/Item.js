import { useEffect, useState } from "react";
import { Button, List } from "@mui/material";

const Item = () => {
    const [users, setUsers] = useState ([]);

    useEffect(() => {
        const users = [
            {id:1, name: "Mesa"},
            {id:2, name: "Velador"},
            {id:3, name: "Lampara techo"}
        ]
        setUsers(users);
    },[]);

    
        return <ul>
            {users.map(u => <li  key={u.id}>{u.name}</li>)}
        </ul>
        
        
    ;
};

export default Item;