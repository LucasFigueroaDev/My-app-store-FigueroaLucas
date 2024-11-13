import { Link, useNavigate } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import './navBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        navigate(event.target.value);
    };

    return (
        <>
            <div className="navBar">
                <h1>
                    <Link className="mainTitle" to='/'>Short Circuit</Link>
                </h1>
                <div className="navContainer">
                    <select className="navSelect" name="category" onChange={handleSelectChange} defaultValue="">
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="/category/celulares">Celulares</option>
                        <option value="/category/tablets">Tablets</option>
                        <option value="/category/parlantes">Parlantes</option>
                        <option value="/category/mouse">Mouse</option>
                        <option value="/category/teclados">Teclados</option>
                    </select>
                    <Link className="navLink" to='/help'>Help</Link>
                </div>
                <CartWidget />
            </div>
        </>
    );
}

export default NavBar;