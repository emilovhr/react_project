import { EffectCallback, useEffect, useState } from 'react'
import getData from '../utils/getData'
import { productApi } from '../types/types'
export function useFetch(url: string) {
    const [data, setData] = useState<productApi>()
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('idle')
    useEffect((): ReturnType<EffectCallback> => {
        let doUpdate = true
        setStatus('loading')
        setData(undefined)
        setError(null)
        getData(url)
            .then((data) => {
                if (doUpdate) {
                    setData(data)
                    setStatus('success')
                }
            })
            .catch((error) => {
                if (doUpdate) {
                    setError(error)
                    setStatus('error')
                }
            })
        return (): void => {
            doUpdate = false
        }
    }, [url])
    return { data, status, error }
}
