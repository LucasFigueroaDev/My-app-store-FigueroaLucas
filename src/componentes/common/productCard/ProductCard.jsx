import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <img src={product.src} alt={product.alt} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`/itemDetail/${product.id}`}>See details</Link>
        </div>
    )
};

export default ProductCard;