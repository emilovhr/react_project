import { Link } from 'react-router-dom'
export default function ProductList({ products }) {
    return (
        <div className="mt-3 ml-3">
            <h1 className="font-bold">Product List</h1>
            <div className="sideNavChild">
                <ul className="productList">
                    {products?.map((product, i) => {
                        return (
                            <li key={i}>
                                <Link
                                    className="block border-l pl-4 -ml-px text-sky-500
                                    border-current font-semibold dark:text-sky-400 hover:text-sky-900"
                                    to={`/details/${product.id}`}
                                >
                                    <span>{product.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
