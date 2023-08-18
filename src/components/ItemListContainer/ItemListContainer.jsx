import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(result => {
            console.log(result)
            setProducts(result)
        })
    }, [])

    console.log(products)

    // const productsComponents = products.map(product => {
    //     return (
    //         <div key={product.id}>
    //             <h3>{product.name}</h3>
    //             <img src={product.img} style={{ width: 100}}/>
    //             <p>Precio: u$s {product.price}</p>
    //         </div>
    //     )
    // })

    return (
        <main>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer