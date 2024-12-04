import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    return (
        <Link to='/cart'>
            <ShoppingBagIcon style={{ color: 'black', fontSize: "48px" }} />
            <span className="cartCounter">{cart.length}</span>
        </Link>
    )
}
export default CartWidget;