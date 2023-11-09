import { Link } from 'react-router-dom'
export default function ProductList({ products }) {
    return (
        <>
            <h1>Product List</h1>
            <div className="sideNavChild">
                <ul className="productList">
                    {products?.map((product, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/details/${product.id}`}>
                                    <span>{product.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
