import { createAdaptedProductFromFirestore } from '../../../adapters/createAdaptedProductFromFirestore'
import { db } from '../firebaseConfig'
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(productsRef)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })

            resolve(productsAdapted)
        })
        .catch(error => {
            reject(error)
        })
})}

export const getProductById = (productId) => {
    const productRef = doc(db, 'products', productId)

    return getDoc(productRef)
        .then(documentSnapshot => {
            return createAdaptedProductFromFirestore(documentSnapshot)
        })
        .catch(error => {
            return error
        })
}