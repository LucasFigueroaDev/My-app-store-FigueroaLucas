import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <h1>
                <Link className="mainTitle" to="/">Short Circuit</Link>
            </h1>
            <div className="navContainer">
                <Link className="navLink" to='/category/smartphone'>Smartphone</Link>
                <Link className="navLink" to='/category/tablets'>Tablets</Link>
                <Link className="navLink" to='/category/mouse'>Mouse</Link>
                <Link className="navLink" to='/category/parlantes'>Speakers</Link>
                <Link className="navLink" to='/category/teclados'>Keyboards</Link>
            </div>
            <CartWidget />
        </div>
    );
};

export default NavBar;