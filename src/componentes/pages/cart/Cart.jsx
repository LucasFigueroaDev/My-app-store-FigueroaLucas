import { Link } from "react-router-dom";
import './cart.css';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cart-containers">
                <h2 className="cart-title">Tu carrito de compras</h2>
                {cart.map(el => {
                    return <div className="cart-container" key={el.id}>
                        <h3 className="cart-subtitle">{el.title}</h3>
                        <p className="cart-quantity">Cantidad: {el.quantity}</p>
                        <p className="cart-price">precio: ${el.price}</p>
                    </div>
                })
                }

                <Link className="finish-button" to='/checkout'>Finalizar compra</Link>
            </div>
        </div>

    )
}

export default Cart;