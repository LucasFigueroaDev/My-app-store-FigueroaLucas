import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Counter from "../../common/counter/Counter";
import './itemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productSelected = collection(db, "products");
        let refDoc = doc(productSelected, id);
        const getDocById = getDoc(refDoc);
        getDocById.then((res) => {
            setProduct({ ...res.data(), id: res.id });
        })
    }, [id]);

    return (
        <div className="container">
                <h2 className="title">{product.title}</h2>
                <div className="contains-products">
                    <img className="image" src={product.img} />
                    <div className="detail-product">
                        <p className="price">${product.price}</p>
                        <p className="stock">Stock disponible: {product.stock}</p>
                        <Counter />
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