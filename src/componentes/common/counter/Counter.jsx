import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import './counter.css';

const Counter = ({ }) => {
    const [count, setCount] = useState(1);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        let productCollection = collection(db, "products");
        let refDoc = doc(productCollection, id);
        const getDocById = getDoc(refDoc);
        getDocById.then((res) => {
            setProduct({ ...res.data(), id: res.id })
        })
    }, [id]);

    const handleIncrement = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const onAdd = () => {
        let productToCart = { ...product, quantity: count };
        addToCart(productToCart);
    };

    return (
        <div className="buttons">
            <div className="btns_inc-decr">
                <button onClick={handleDecrement} className="buttonCount"> - </button>
                <p>{count}</p>
                <button onClick={handleIncrement} className="buttonCount"> + </button>
            </div>
            <button className="buttonAdd" onClick={onAdd}>Agregar producto al carrito</button>
        </div>
    )
}

export default Counter;