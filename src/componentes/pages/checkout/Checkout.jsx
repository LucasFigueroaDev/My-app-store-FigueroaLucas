import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import './checkout.css';

const Checkout = () => {
    const { cart, totalPrices, totalQuantityProducts } = useContext(CartContext);
    
    return (
        <div className='checkout-page'>
            <div className='checkout-form'>
                <h2 className='checkout-title'>Tus datos</h2>
                <form className='form' action="">
                        <label htmlFor="">Tu nombre: </label>
                        <input type="text" />
                        <label htmlFor="">Tu correo: </label>
                        <input type="email" />
                        <label htmlFor="">Tu teléfono: </label>
                        <input type="number" />
                        <input type="submit" value="Comprar"/>
                </form>
            </div>
            <div className='checkout-details'>
                <h2 className='details-title'>Detalle de tu compra</h2>
                <p className='details-products'>Productos: {totalQuantityProducts()}</p>
                <p className='details-total'>Total a pagar: ${totalPrices()}</p>
            </div>
        </div>
    )
}

export default Checkout