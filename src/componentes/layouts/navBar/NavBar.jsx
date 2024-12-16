import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import CartWidget from "../../common/cartWidget/CartWidget";
import './navBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-bar">
            <h1>
                <Link className="main-title" to="/">Short Circuit</Link>
            </h1>
            <button className="menu-button" onClick={toggleMenu}>☰</button>
            <div className={classNames("nav-container",{open: isMenuOpen})}>
                <Link className="nav-link" to='/category/smartphone'>Smartphone</Link>
                <Link className="nav-link" to='/category/tablets'>Tablets</Link>
                <Link className="nav-link" to='/category/mouse'>Mouse</Link>
                <Link className="nav-link" to='/category/parlantes'>Speakers</Link>
                <Link className="nav-link" to='/category/teclados'>Keyboards</Link>
            </div>
            <div className="cart-widget">
            <CartWidget />
            </div>
        </div>
    );
};

export default NavBar;