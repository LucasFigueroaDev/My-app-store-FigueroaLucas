import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { Link } from "react-router-dom";
import './itemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        let productSelected = products.find((item) => item.id === +id);
        setProduct(productSelected);
    }, [id]);

    return (
        <div className="container">
            <h2 className="title">{product.title}</h2>
            <div className="contains-products">
                <img className="image" src={product.img} alt={product.alt} />
                <div className="detail-product">
                    <p className="price">${product.price}</p>
                    <p className="stock">Stock disponible: {product.stock}</p>
                    <Link to='/cart' className="btnAdd">Agregar producto al carrito</Link>
                </div>
            </div>
            <div className="product-description">
                <h3 className="title-secundary">Descripción del producto</h3>
                <p className="text">{product.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail;