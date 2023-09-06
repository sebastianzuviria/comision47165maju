import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <button>
            <img src={cart}/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget