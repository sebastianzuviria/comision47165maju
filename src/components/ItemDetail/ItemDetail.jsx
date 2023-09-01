import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, price, img, stock, description }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('se agrego ' + quantity)
        setQuantity(quantity)
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{ width: 500}}/>
            <h3>${price}</h3>
            <h3>{description}</h3>
            {
                quantity === 0 ? (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                ) : (
                    <button>Finalizar compra</button>
                )
            }
        </div>
    )
}

export default ItemDetail