import { Link } from "react-router-dom";
import './productCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="productCard">
            <h3 className="productCard_title">{product.title}</h3>
            <img className="productCard_image" src={product.img} alt={product.alt} />
            <p className="productCard_txt">{product.description}</p>
            <p className="productCard_price">${product.price}</p>
            <Link className="productCard_button" to={`/itemDetail/${product.id}`}>Más detalles</Link>
        </div>
    )
};

export default ProductCard;