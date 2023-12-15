import React, { SetStateAction } from 'react'

export type product = {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    listId?: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}

export type productApi = {
    limit?: number
    products: product[] | undefined
    skip?: number
    total?: number
}

export type fetchType = {
    data: productApi | undefined
    error: boolean | null
    status: string
}

export type ProductDetailsType = {
    products: product[] | undefined
    setCart: (cart: product[]) => void
    cart: product[]
    quantity: number
    setQuantity: (quantity: SetStateAction<number>) => void
    isNavOpen: boolean
    status: string
}

type size = {
    width: number
    height: number
}

export type ShoppingCartType = {
    removeFromCart: (e: React.MouseEvent<HTMLButtonElement>) => void
    cart: product[]
    cartTotalPrice: number
    isNavOpen: boolean
    size: size
}
