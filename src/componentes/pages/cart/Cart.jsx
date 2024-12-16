import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import './cart.css';

const Cart = () => {
    const { cart, removeProduct, clearCart, totalPrices } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <>
                <h2 className="cart-title">Tu carrito de compras</h2>
                <div className="cart-empty">
                    <p className="empty-txt">Tu carrito esta vacio</p>
                </div>
            </>
        )
    } else {
        return (
            <div className="cart">
                <h2 className="cart-title">Tu carrito de compras</h2>
                <div className="cart-containers">
                    {cart.map(el => {
                        return <div className="cart-container" key={el.id}>
                            <h3 className="cart-subtitle">{el.title}</h3>
                            <p className="cart-quantity">Cantidad: {el.quantity}</p>
                            <p className="cart-price">precio: ${el.price}</p>
                            <button className="cart-remove-btn" onClick={() => removeProduct(el.id)}>Eliminar Producto</button>
                        </div>
                    })}
                    <p className="cart-total">Total: ${totalPrices()}</p>
                    <button className="clear-button" onClick={()=>clearCart()}>Vaciar Carrito</button>
                    <Link className="finish-button" to='/checkout'>Finalizar compra</Link>
                </div>
            </div>
        )
    }
}

export default Cart;