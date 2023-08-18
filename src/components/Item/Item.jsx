const Item = ({ name, img, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}}/>
            <p>Precio: u$s {price}</p>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Item