const ItemListContainer = ({greeting}) => {
    console.log("Soy props de ILC", greeting)
    return (
        <>
        <h1>{greeting}</h1>
        </>
    )
}

export default ItemListContainer;