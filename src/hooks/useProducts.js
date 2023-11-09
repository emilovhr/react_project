import { useEffect, useState } from 'react'

export function useProducts() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        async function getProducts() {
            let prod = await fetch('https://dummyjson.com/products', {
                method: 'GET',
            })
            let resp = await prod.json()
            setProducts(resp.products)
        }
        getProducts()
    }, [])

    return products
}
