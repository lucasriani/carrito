const data = [
    {
        "id": 1,
        "title":"Mesa Ratona",
        "descripcion":"este es el primer producto",
        "categoria": "mesa",
        "price": "$12000",
        "stock": "10"
    },

    {
        "id": 2,
        "title":"Velador",
        "descripcion":"este es el segundo  producto",
        "categoria": "mesa",
        "price": "$3000",
        "stock": "3"
    },

    {
        "id": 3,
        "title":"Mesa Ratona",
        "descripcion":"este es el tercer producto",
        "categoria": "mesa",
        "price": "$12000",
        "stock": "10"
    }
]

const getProducts = new Promise ((resolve) =>{
    setTimeout(() =>{
        resolve(data)
    }, 2000)
})

export default getProducts