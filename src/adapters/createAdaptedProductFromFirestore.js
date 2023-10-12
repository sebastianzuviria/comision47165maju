export const createAdaptedProductFromFirestore = (doc) => {
    const fields = doc.data()

    const productAdapted = {
        id: doc.id,
        name: fields.title,
        img: fields.img,
        stock: fields.stock,
        category: fields.category,
        description: fields.description,
        price: fields.price
    }

    return productAdapted
}