import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {

    // const navigate = useNavigate()

    return (
        <div>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}}/>
            <p>Precio: u$s {price}</p>
            <Link to={`/detail/${id}`} >Ver Detalle</Link>
            {/* <button onClick={() => navigate('/detail')}>Detalle</button> */}
        </div>
    )
}

export default Item