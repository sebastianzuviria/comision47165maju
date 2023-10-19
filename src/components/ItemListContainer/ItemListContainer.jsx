import { useState, useEffect, memo } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <main onClick={() => console.log('itemlistcontainer')}>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemListMemo products={products}/> : <h1>No hay productos disponibles</h1> }
        </main>
    )
}

export default ItemListContainer