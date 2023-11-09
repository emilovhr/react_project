import ProductList from './ProductList'
import { useEffect, useState } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ShoppingCart from '../cart/ShoppingCart'
import logo from '../../logo.svg'
import cartSvg from '../../shopping-cart-outline-svgrepo-com.svg'

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) ?? []
    })
    const [isNavOpen, setIsNavOpen] = useState(true)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const location = useLocation()
    const products = useProducts()

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const removeFromCart = (e) => {
        let newCart = cart.filter(
            (c) => c.id !== parseInt(e.target.attributes[1].value, 10)
        )
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    const filteredProducts = products?.filter((prod) => {
        if (searchTerm === '') return true
        return prod.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    })

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    useEffect(() => {
        if (cart) {
            let cartTotal = 0
            cart.forEach((c) => {
                cartTotal += c.price
            })
            setCartTotalPrice(cartTotal)
        }
    }, [cart, location])

    return (
        <>
            <header className="App-header">
                <div style={{ display: 'flex' }}>
                    <button
                        className="focus:outline-none text-white bg-green-700
                        hover:bg-green-800 focus:ring-4 focus:ring-green-300
                        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                        dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={toggleMenu}
                    >
                        Toggle Nav Menu
                    </button>
                    <div>Products & Shopping Cart</div>
                    <div className="cart-logo-align">
                        <Link to="/cart">
                            <img
                                src={cartSvg}
                                className="cartLogo"
                                alt="logo"
                            />
                        </Link>
                    </div>
                </div>
            </header>
            {isNavOpen ? (
                <div className="sideNav">
                    <img src={logo} className="App-logo mt-10" alt="logo" />
                    <label className="font-bold">Filter</label>
                    <input
                        className="border
                    border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full pl-10 p-2.5
                    dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-sky-500
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleSearchChange}
                        value={searchTerm}
                    />
                    <div className="mt-3 text-center">
                        <Link
                            className="font-bold text-sky-400 hover:text-sky-900"
                            to="/cart"
                        >
                            Shopping Cart
                        </Link>
                        <div># of items: {cart.length}</div>
                    </div>
                    <ProductList products={filteredProducts} />
                </div>
            ) : null}
            <Routes>
                <Route
                    path="/details/:id"
                    element={
                        <ProductDetails
                            products={filteredProducts}
                            setCart={setCart}
                            cart={cart}
                        />
                    }
                ></Route>
                <Route
                    path="/cart/"
                    element={
                        <ShoppingCart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            cartTotalPrice={cartTotalPrice}
                        />
                    }
                ></Route>
            </Routes>
        </>
    )
}
