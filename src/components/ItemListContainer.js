import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    console.log("Soy props de ILC", greeting)
    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={5} initial={1} />
        </>
    )
}

export default ItemListContainer;