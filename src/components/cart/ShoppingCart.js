import { Link } from 'react-router-dom'

export default function ShoppingCart({ cart, removeFromCart, cartTotalPrice }) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cart
                    ?.sort((a, b) => a.title.localeCompare(b.title))
                    .map((product, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/details/${product.id}`}>
                                    <span>{product.title}</span>
                                </Link>
                                <button
                                    idx={product.id}
                                    onClick={removeFromCart}
                                >
                                    Remove
                                </button>
                            </li>
                        )
                    })}
            </ul>
            <div>
                <label>Cart Total : </label>$<span>{cartTotalPrice}</span>
            </div>
        </div>
    )
}
