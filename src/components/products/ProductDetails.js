import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductDetails({ products, setCart, cart }) {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const prod = products?.find((p) => {
            return p.id === parseInt(id, 10)
        })
        if (products?.length && prod) {
            setProduct(prod)
        }
    }, [id, products])

    return (
        <div style={{ marginTop: '10rem' }}>
            {!product ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <h1 className="font-bold text-xl ">Product Details</h1>
                    <h2>{product?.title}</h2>
                    <div>{product?.category}</div>
                    <div>{product?.description}</div>
                    <div>${product?.price}</div>
                    <br />
                    <button
                        className="ocus:outline-none text-white bg-green-700
                        hover:bg-green-800 focus:ring-4 focus:ring-green-300
                        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                        dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                            let newCart = [...cart]
                            const newProduct = { ...product }
                            newProduct.id = Math.floor(Math.random() * 100000)
                            newCart.push(newProduct)
                            localStorage.setItem(
                                'cart',
                                JSON.stringify(newCart)
                            )
                            setCart(newCart)
                        }}
                    >
                        Add to Cart
                    </button>
                    <br />
                    <div className="ml-auto mr-auto h-auto max-w-lg">
                        <img alt={'img'} src={product?.thumbnail} />
                    </div>
                </div>
            )}
        </div>
    )
}
