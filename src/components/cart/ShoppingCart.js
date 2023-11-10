export default function ShoppingCart({ cart, removeFromCart, cartTotalPrice }) {
    return (
        <div style={{ marginTop: '7rem' }}>
            <h1 className="font-bold text-white text-2xl mb-5">
                Shopping Cart
            </h1>
            <div className="mr-auto ml-auto max-w-4xl relative overflow-x-auto mb-10">
                {cart.length ? (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Brand
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
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
                                            <td className="px-6 py-4">
                                                {product.brand}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.category}
                                            </td>
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
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 text-right">
                                    <label className="font-bold">
                                        Total :{' '}
                                    </label>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <span className="font-bold">$</span>
                                        <span>{cartTotalPrice}</span>
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
