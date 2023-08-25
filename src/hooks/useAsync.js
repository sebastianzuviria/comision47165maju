import { useEffect, useState } from 'react'

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        asyncFunction()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependencies)

    return {
        data,
        error,
        loading
    }
}