import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (product)=> {
        setCart([...cart, product]);
    };

    let data = { cart, addToCart };
    return <CartContext.Provider value={ data }>{ children }</CartContext.Provider>
};

