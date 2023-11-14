export default function ShoppingCart({
    cart,
    removeFromCart,
    cartTotalPrice,
    isNavOpen,
    size,
}) {
    const { width } = size
    console.log(width)
    const smallerTable = isNavOpen ? 'ml-12 mr-12 md:ml-48 md:mr-12' : 'w-[95%]'
    return (
        <div style={{ marginTop: '7rem' }}>
            <h1 className="font-bold text-white text-2xl mb-5">
                Shopping Cart
            </h1>
            <div
                className={`${smallerTable} ml-auto mr-auto relative overflow-x-auto mb-10`}
            >
                {cart.length ? (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                {width < 1091 ? null : (
                                    <>
                                        <th scope="col" className="px-6 py-3">
                                            Brand
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                    </>
                                )}
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart
                                ?.sort((a, b) => a.title.localeCompare(b.title))
                                .map((product, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {product.title}
                                            </th>
                                            {width < 1091 ? null : (
                                                <>
                                                    <td className="px-6 py-4">
                                                        {product.brand}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {product.category}
                                                    </td>
                                                </>
                                            )}
                                            <td className="px-6 py-4">
                                                ${product.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    className="focus:outline-none
                                                        text-white bg-red-700 hover:bg-red-800
                                                        focus:ring-4 focus:ring-red-300
                                                        font-medium rounded-lg text-sm
                                                        px-5 py-2.5 mr-2 mb-2 dark:bg-red-600
                                                        dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    idx={product.id}
                                                    onClick={removeFromCart}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                ></th>
                                {width < 1091 ? null : (
                                    <>
                                        <td className="px-6 py-4"></td>
                                        <td className="px-6 py-4 text-right"></td>
                                    </>
                                )}
                                <td className="px-6 py-4">
                                    <div>
                                        <span className="font-bold text-md">
                                            $
                                        </span>
                                        <span className="font-bold text-md">
                                            {cartTotalPrice}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4"></td>
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
