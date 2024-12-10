import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './cartWidget.css';

const CartWidget = () => {
    const { cart, totalQuantityProducts } = useContext(CartContext);
    return (
        <Link to='/cart'>
            <ShoppingBagIcon style={{ color: 'black', fontSize: "48px" }} />
            <span className="cartCounter">{totalQuantityProducts()}</span>
        </Link>
    )
}
export default CartWidget;