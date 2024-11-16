import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {
    return (
        <div className="cart-container">
            <h2 className="cart-title">Tu carrito de compras</h2>

            <Link className="finish-button" to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart;