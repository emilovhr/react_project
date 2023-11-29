import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductList({ products }: any) {
    return (
        <div className="mt-3 ml-3">
            <h1 className="font-bold mb-4">Product List</h1>
            <div className="sideNavChild overflow-x-scroll max-h-[150px] md:max-h-[450px]">
                <ul className="productList">
                    {products?.map((product: any, i: number) => {
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