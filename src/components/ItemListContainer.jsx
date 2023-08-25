
import { getProducts } from '../asyncMock'
import { useAsync } from '../hooks/useAsync'

const ItemListContainer = () => {
    const asyncFunction = () => getProducts()

    const { data: products, loading, error } = useAsync(asyncFunction)
    
    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error obteniendo productos</h1>
    }

    return (
        <div>
            <h1>Productos</h1>
            {
                products.map(prod => <h1 key={prod.id}>{prod.name}</h1>)
            }
        </div>
    )
}

export default ItemListContainer