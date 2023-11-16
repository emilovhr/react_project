import React from 'react'
import { Link } from 'react-router-dom'

export default function ShoppingCart({
    cart,
    removeFromCart,
    cartTotalPrice,
    isNavOpen,
    size,
}: any) {
    const { width } = size
    const smallerTable = isNavOpen
        ? 'ml-20 mr-20 md:ml-24 md:mr-12'
        : 'ml-auto mr-auto w-[70%]'

    const smallerWidth = width < 900 ? 'text-xs' : 'text-sm'

    return (
        <div className={isNavOpen ? `mt-12 md:mt-32` : 'mt-32'}>
            <h1 className="font-bold text-white text-2xl mb-5">
                Shopping Cart
            </h1>
            <div
                className={`${smallerTable} relative overflow-x-auto mb-10 rounded-2xl`}
            >
                {cart.length ? (
                    <table
                        className={`${smallerWidth} w-full text-left text-gray-500 dark:text-gray-400 pt-5 pb-0 text-center sm:text-left`}
                    >
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="sm:table-row flex flex-col flex-nowrap hidden sm:visible">
                                <th scope="col" className="px-6 py-4">
                                    Product name
                                </th>
                                {width < 1145 ? null : (
                                    <>
                                        <th scope="col" className="px-3 py-2">
                                            Brand
                                        </th>
                                        <th scope="col" className="px-3 py-2">
                                            Category
                                        </th>
                                    </>
                                )}
                                <th scope="col" className="px-3 py-2">
                                    Price
                                </th>
                                <th scope="col" className="px-3 py-2">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            {cart
                                ?.sort((a: any, b: any) =>
                                    a.title.localeCompare(b.title)
                                )
                                .map((product: any, i: number) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 sm:table-row flex flex-col flex-nowrap py-5"
                                        >
                                            <th
                                                scope="row"
                                                className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                <Link
                                                    to={`/details/${product.listId}`}
                                                >
                                                    <td className="justify-center flex visible sm:hidden">
                                                        <img
                                                            className="h-14 w-14 mb-5 rounded-md shadow-black hover:shadow-white hover:shadow-sm shadow-lg"
                                                            src={
                                                                product.thumbnail
                                                            }
                                                            alt="product-img"
                                                        />
                                                    </td>
                                                </Link>
                                                <Link
                                                    className="sm:pl-4 -ml-px text-sky-500
                                                    border-current font-semibold dark:text-sky-400 hover:text-sky-900"
                                                    to={`/details/${product.listId}`}
                                                >
                                                    {product.title}
                                                </Link>
                                            </th>
                                            {width < 1145 ? null : (
                                                <>
                                                    <td className="px-3 py-2">
                                                        {product.brand}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {product.category}
                                                    </td>
                                                </>
                                            )}
                                            <td className="px-3 py-2">
                                                ${product.price}
                                            </td>
                                            <td className="px-3 py-2">
                                                <button
                                                    className="relative top-1 focus:outline-none
                                                    text-white bg-red-700 hover:bg-red-800
                                                    focus:ring-4 focus:ring-red-300
                                                    font-medium rounded-lg text-sm
                                                    px-1 py-1 dark:bg-red-600 mb-3
                                                    dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    //@ts-ignore
                                                    idx={product.id}
                                                    onClick={removeFromCart}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 sm:table-row flex flex-col flex-no wrap">
                                <th
                                    scope="row"
                                    className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                ></th>
                                {width < 1145 ? null : (
                                    <>
                                        <td className="px-3 py-2"></td>
                                        <td className="px-3 py-2 text-right"></td>
                                    </>
                                )}
                                <td className="px-3 py-2">
                                    <div>
                                        <span className="font-bold text-md">
                                            $
                                        </span>
                                        <span className="font-bold text-md">
                                            {cartTotalPrice}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-3 py-2"></td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div className="text-white text-xl mb-5">
                        Nothing in cart
                    </div>
                )}
            </div>
            <ul></ul>
        </div>
    )
}
