import classes from './ItemListContainer.module.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <main>
            <h1 className={classes.greeting}>{greeting}</h1>
        </main>
    )
}

export default ItemListContainer