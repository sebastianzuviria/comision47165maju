import { useState, createContext, useContext, useCallback, useMemo } from 'react'

const CartContext = createContext('Este valor lo ven aquellos que esten fuera del provider')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    console.log('re render')

    const addItem = useCallback((productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        addToCartState(productToAdd)
      } 
    }, [])
  
    const addToCartState = useCallback((productToAdd) => setCart(prev => [...prev, productToAdd]), [])

    const isInCart = useCallback((id) => {
      return cart.some(prod => prod.id === id)
    }, [cart])

    const getTotalQuantity = useCallback(() => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }, [cart])

    const totalQuantity = useMemo(() => getTotalQuantity(), [getTotalQuantity])

    const getTotal = useCallback(() => {
      let total = 0

      cart.forEach(prod => {
          total += prod.quantity * prod.price
      })

      return total
    }, [cart])

    const total = useMemo(() => getTotal(), [getTotal])

    const removeItem = useCallback((id) => {
        setCart(prev => prev.filter(prod => prod.id !== id))
    }, [])

    const clearCart = useCallback(() => {
        setCart([])
    }, [])

    const contextValue = useMemo(() => ({
      cart, addItem, totalQuantity, removeItem, clearCart, total
    }), [ cart, addItem, totalQuantity, removeItem, clearCart, total ])

    return (
        <CartContext.Provider value={contextValue}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}