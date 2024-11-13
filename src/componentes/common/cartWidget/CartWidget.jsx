import { Link } from 'react-router-dom'
import './CartWidget.css' 
const CartWidget = () => {
    const cart = ['./src/assets/bolsaDeCompra.png', 'logo de bolsa de compra']
    return (
        <Link to='/cart'>
            <img className="cartLogo" src={cart[0]} alt={cart[1]} width='512' height='512' />
            <span className="cartCounter">0</span>
        </Link>
    )
}
export default CartWidget;