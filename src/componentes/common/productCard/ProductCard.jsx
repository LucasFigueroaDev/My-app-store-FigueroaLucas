import { Link } from "react-router-dom";
import className from "classnames";
import './productCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className={className("product-card", { "product-card_out-of-stock": product.stock === 0 })}>
            <h3 className="product-card_title">{product.title}</h3>
            <img className="product-card_image" src={product.img} alt={product.alt}  width='500' height='500'/>
            <p className="product-card_txt">{product.description}</p>
            <p className="product-card_price">${product.price}</p>
            {product.stock === 0 ? (
                <p className="product-card_no-stock">Sin stock</p>
            ) : <Link className="product-card_button" to={`/itemDetail/${product.id}`}>Más detalles</Link>
            }
        </div>
    )
};

export default ProductCard;