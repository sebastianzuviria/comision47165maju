import classes from './Navbar.module.css'
import { useEffect, useState } from 'react'
import CartWidget from "../CartWidget/CartWidget"
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'

const Navbar = () => {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order', 'asc'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategories(categoriesAdapted)
            })
    }, [])


    return (
        <nav className={classes.container}>
            <h1>Ecommerce</h1>
            <section>
                {
                    categories.map(cat => (
                        <button key={cat.id} className={ classes.inactive}>{cat.name}</button>
                    ))
                }
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar