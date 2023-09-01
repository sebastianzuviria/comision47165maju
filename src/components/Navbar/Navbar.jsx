import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <h1 onClick={() => navigate('/')}>Mi Ecommerce</h1>
            <section>
                <button onClick={() => navigate('/category/celular')}>Celulares</button>
                <button onClick={() => navigate('/category/tablet')}>Tablets</button>
                <button onClick={() => navigate('/category/notebook')}>Notebooks</button>
            </section>
        </nav>
    )
}

export default Navbar