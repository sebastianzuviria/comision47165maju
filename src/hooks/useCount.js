import { useState } from 'react'

export const useCount = (initialValue = 0) => {
    const [count,setCount] = useState(initialValue)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    return {
        count,
        increment,
        decrement
    }
}