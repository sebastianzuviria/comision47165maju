import { useCount } from "../hooks/useCount"

const Count = () => {
    const { count: manzanas, decrement: decrementManzanas, increment: incrementManzanas } = useCount()
    const { count: naranjas, decrement: decrementNaranjas, increment: incrementNaranjas } = useCount(20)


    return (
        <div>
            <div>
                <h1>Manzanas</h1>
                <h1>{manzanas}</h1>
                <button onClick={decrementManzanas}>Decrement</button>
                <button onClick={incrementManzanas}>Increment</button>
            </div>
            <div>
                <h1>Naranajas</h1>
                <h1>{naranjas}</h1>
                <button onClick={decrementNaranjas}>Decrement</button>
                <button onClick={incrementNaranjas}>Increment</button>
            </div>
        </div>
        
    )
}

export default Count