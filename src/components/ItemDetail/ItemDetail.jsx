import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    
    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }
        console.log(objProductToAdd)
        console.log('agregue al carrito: ', count)
    }

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                <ItemCount onAdd={handleOnAdd} stock={stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail