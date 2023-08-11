import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    // console.log(count)

    const decrement = () => {
        setCount(count => count - 1)
    }

    const increment = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
        </div>
    )
}

export default Count