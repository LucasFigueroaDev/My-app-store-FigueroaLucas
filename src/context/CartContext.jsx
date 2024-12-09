import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((productsCart) => {
            const existingProduct = productsCart.find((el) => el.id === product.id);
            if (existingProduct) {
                return productsCart.map((el) =>
                    el.id === product.id ? { ...el, quantity: el.quantity + product.quantity } : el
                )
            } else {
                return [...cart, product]
            }
        })

    };

    const removeProduct = (id) => {
        setCart((productsCart) => productsCart.filter((el) => el.id !== id))
    };

    const clearCart = () => {
        setCart([]);
    };

    let data = { cart, addToCart, removeProduct, clearCart };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};

