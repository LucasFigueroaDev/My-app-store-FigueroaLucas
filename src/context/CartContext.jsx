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

    const totalQuantityProducts = () => {
        return cart.reduce((quantity, el) => quantity + el.quantity, 0);
    };

    const totalPrices = () => {
        return cart.reduce((total, el) => total + el.price * el.quantity, 0)
    };

    let data = { cart, addToCart, removeProduct, clearCart, totalQuantityProducts, totalPrices };
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};

