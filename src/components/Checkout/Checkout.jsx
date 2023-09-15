import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const navigate = useNavigate()

    const createOrder = async () => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    phone: '123456789',
                    email: 'contact@sebaz.io'
                },
                items: cart,
                total
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsRef).then(({ docs }) => {
            //     docs.forEact()
            // })
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
    
                const { id: orderId } = await addDoc(orderRef, objOrder)
                
                batch.commit()
                clearCart()
                navigate('/')
                console.log('el numero de orden es: ' + orderId)
            } else {
                console.error('Hay productos fuera de stock...')
            }
        } catch (error) {
            console.log('Ocurrio un error al obtener datos: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden</button>
        </>
    )
}

export default Checkout