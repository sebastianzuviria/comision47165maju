const ContactForm = ({ createOrder }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={() => createOrder({ name, phone, email })}>
                {/* <input />
                <input />
                <input /> */}
                <button>Generar orden</button>
            </form>
        </>
    )
}

export default ContactForm