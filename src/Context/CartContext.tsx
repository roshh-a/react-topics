import React, { createContext, useEffect, useState } from "react"
import { ContextProviderProps, Product, CartContextType } from "../Helpers/Model";

export const cartContext = React.createContext<CartContextType | null>(null);

export const CartContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    // Call the getTotalPrice whenever the items in the list gets updated
    useEffect(() => {
        getTotalPrice();
    }, [cartItems]);

    const addToCart = (products: Product) => {
        setCartItems((prev) => [...prev, products]);
    }
    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter(items => items.id !== id))
    }

    const getTotalPrice = () => {
        const productsTotalPrice = cartItems.reduce((acc, currentValue) => {
            return acc + currentValue.price
        }, 0); // inital value
        setTotalPrice(productsTotalPrice);
    }

    return (
        <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
            {children}
        </cartContext.Provider>
    )
}