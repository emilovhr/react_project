import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductDetails({
    products,
    setCart,
    cart,
    quantity,
    setQuantity,
}) {
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
        <>
            <section className="overflow-hidden py-11 font-poppins mt-32">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-white md:text-4xl">
                        {product?.title}
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img
                                        src={product?.thumbnail}
                                        alt=""
                                        className="object-cover w-full lg:h-full "
                                    />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-blue-300 dark:border-transparent
                                            dark:hover:border-blue-300 hover:border-blue-300"
                                        >
                                            <img
                                                src={product?.thumbnail}
                                                alt=""
                                                className="object-cover w-full lg:h-20"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-transparent
                                            dark:border-transparent dark:hover:border-blue-300
                                            hover:border-blue-300"
                                        >
                                            <img
                                                src={product?.thumbnail}
                                                alt=""
                                                className="object-cover w-full lg:h-20"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-transparent dark:border-transparent
                                            dark:hover:border-blue-300 hover:border-blue-300"
                                        >
                                            <img
                                                src={product?.thumbnail}
                                                alt=""
                                                className="object-cover w-full lg:h-20"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a
                                            href="#"
                                            className="block border border-transparent
                                            dark:border-transparent dark:hover:border-blue-300
                                            hover:border-blue-300"
                                        >
                                            <img
                                                src={product?.thumbnail}
                                                alt=""
                                                className="object-cover w-full lg:h-20"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <span
                                        className="text-lg font-medium
                                        text-rose-500 dark:text-rose-200"
                                    >
                                        New
                                    </span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-white md:text-4xl">
                                        {product?.category}
                                    </h2>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        {product?.description}
                                    </p>
                                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>${product?.price}</span>
                                    </p>
                                    <p className="text-green-600 dark:text-green-300 ">
                                        7 in stock
                                    </p>
                                </div>
                                <div className="w-32 mb-8 ">
                                    <label
                                        htmlFor=""
                                        className="w-full text-xl font-semibold text-white"
                                    >
                                        Quantity
                                    </label>
                                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                        <input
                                            type="number"
                                            className="flex items-center w-full font-semibold text-center
                                            text-gray-700 placeholder-gray-700 bg-gray-300 outline-none
                                            dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900
                                            focus:outline-none text-md"
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
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
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
                                    <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                        <button class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                            Add to wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
