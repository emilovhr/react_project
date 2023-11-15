import ProductList from './ProductList'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ShoppingCart from '../cart/ShoppingCart'
import logo from '../../logo.svg'
import cartSvg from '../../shopping-cart-outline-svgrepo-com.svg'
import { useWindowSize } from '../../hooks/useWindowSize'
import Loader from '../Loader'

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) ?? []
    })
    const [quantity, setQuantity] = useState(1)
    const [isNavOpen, setIsNavOpen] = useState(true)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const location = useLocation()
    const { data, status } = useFetch('https://dummyjson.com/products')

    const size = useWindowSize()

    const smallerDetails = isNavOpen ? 'md:ml-64 md:mr-0' : 'mr-auto'
    const isOpen = isNavOpen
        ? 'opacity-100 relative visible'
        : 'opacity-0 invisible'

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

    const filteredProducts = data?.products?.filter((prod) => {
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
            <header className="App-header shadow-black shadow-sm backdrop-blur-md">
                <div className="flex">
                    <div className="absolute left-5 top-[30px]">
                        <button
                            onClick={toggleMenu}
                            className="flex flex-col justify-center items-center"
                        >
                            <div className="group">
                                <span
                                    className={`bg-sky-400 block transition-all duration-300 ease-out 
                                h-0.5 w-6 rounded-sm group-hover:bg-white ${
                                    isNavOpen
                                        ? 'rotate-45 translate-y-1'
                                        : '-translate-y-0.5'
                                }`}
                                ></span>
                                <span
                                    className={`bg-sky-400 block transition-all duration-300 ease-out 
                                h-0.5 w-6 rounded-sm my-0.5 group-hover:bg-white ${
                                    isNavOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                                ></span>
                                <span
                                    className={`bg-sky-400 block transition-all duration-300 ease-out
                                h-0.5 w-6 rounded-sm group-hover:bg-white ${
                                    isNavOpen
                                        ? '-rotate-45 -translate-y-1'
                                        : 'translate-y-0.5'
                                }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                    <div className="ml-[25px]">Product Store</div>
                    <div className="cart-logo-align">
                        <Link to="/cart">
                            <img
                                src={cartSvg}
                                className="cartLogo rounded-md w-[40px] pt-[2px] pr-[0px] pb-[4px]
                                pl-[5px] h-[30px] hover:bg-sky-400 hover:shadow-sm hover:shadow-black focus:bg-sky-400"
                                alt="logo"
                            />
                            <span className="sr-only">Notifications</span>
                            {cart.length ? (
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                                    text-white bg-red-500 border-2 border-gray-500 rounded-full -top-2 -right-2 dark:border-gray-900"
                                >
                                    {cart.length}
                                </div>
                            ) : null}
                        </Link>
                    </div>
                </div>
            </header>
            <div>
                <div
                    className={
                        isNavOpen
                            ? `sideNav ${isOpen} min-w-full object-scale-down md:min-w-[300px] md:fixed ease-in-out duration-200`
                            : `absolute ${isOpen}`
                    }
                >
                    <div className="mt-20">
                        <label className="font-bold">Filter</label>
                        <input
                            className="min-w-[90%] mr-[300px] md:min-w-[185px] border
                        border-gray-300 text-gray-900
                        text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block pl-3 p-2.5
                        ml-7
                        dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-sky-500
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500 mt-1"
                            onChange={handleSearchChange}
                            value={searchTerm}
                        />
                    </div>
                    <div className="mt-3 text-center">
                        <Link
                            className="font-bold text-sky-400 hover:text-sky-900"
                            to="/cart"
                        >
                            Shopping Cart
                        </Link>
                        <div># of items: {cart.length}</div>
                    </div>
                    {status === 'loading' ? (
                        <Loader />
                    ) : (
                        <ProductList products={filteredProducts} />
                    )}
                </div>
                <div className={`${smallerDetails}`}>
                    <Routes>
                        <Route
                            path="/details/:id"
                            element={
                                <ProductDetails
                                    products={filteredProducts}
                                    setCart={setCart}
                                    cart={cart}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    isNavOpen={isNavOpen}
                                    status={status}
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
                                    isNavOpen={isNavOpen}
                                    size={size}
                                />
                            }
                        ></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}
