import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductDetails({
    products,
    setCart,
    cart,
    quantity,
    setQuantity,
    isNavOpen,
}) {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const navClosedStyle = isNavOpen ? '' : 'mt-8'

    useEffect(() => {
        const prod = products?.find((p) => {
            return p.id === parseInt(id, 10)
        })
        if (products?.length && prod) {
            setProduct(prod)
        }
    }, [id, products])

    return (
        <div>
            <section
                className={`overflow-hidden py-11 font-poppins ${navClosedStyle} md:mt-16`}
            >
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex justify-center">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-white md:text-4xl">
                                    {product?.title}
                                </h2>
                                <img
                                    style={{ width: '100%' }}
                                    className="mt-10 mb-10 w-[500px] justify-center h-auto max-w-full rounded-lg shadow-lg shadow-white"
                                    src={product?.thumbnail}
                                    alt="product"
                                />
                                <div className="mb-8 ">
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-white md:text-4xl">
                                        {product?.category}
                                    </h2>
                                    <p className="mb-8 text-gray-700 dark:text-gray-400">
                                        {product?.description}
                                    </p>
                                    <p className="inline-block text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>${product?.price}</span>
                                    </p>
                                </div>
                                <div className="w-[100px] mr-auto ml-auto mb-8 ">
                                    <label
                                        htmlFor=""
                                        className="w-full text-xl font-semibold text-white"
                                    >
                                        Quantity
                                    </label>
                                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                        <input
                                            type="number"
                                            className="border border-gray-300
                                            text-gray-900 text-sm rounded-lg
                                            focus:ring-blue-500 focus:border-blue-500
                                            block w-full pl-10 p-2.5 dark:border-gray-600
                                            dark:placeholder-gray-400 dark:text-sky-500
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => {
                                                setQuantity(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-4 ">
                                    <div className="w-full px-4 mb-4 lg:mb-0">
                                        <button
                                            className="flex items-center justify-center
                                            w-full p-4 text-blue-500 border border-blue-500
                                            rounded-md dark:text-gray-200 dark:border-blue-600
                                            hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100
                                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700
                                            dark:hover:text-gray-300"
                                            onClick={() => {
                                                let newCart = [...cart]
                                                for (
                                                    let i = 1;
                                                    i <= quantity;
                                                    i++
                                                ) {
                                                    const newProduct = {
                                                        ...product,
                                                    }
                                                    newProduct.id = Math.floor(
                                                        Math.random() * 100000
                                                    )
                                                    newCart.push(newProduct)
                                                }
                                                localStorage.setItem(
                                                    'cart',
                                                    JSON.stringify(newCart)
                                                )
                                                setCart(newCart)
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
