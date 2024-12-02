import { useState } from "react";
import './counter.css'

const Counter = ({ product }) => {
    const [count, setCount] = useState(1);

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

    return (
        <div className="buttons">
            <div className="btns_inc-decr">
                <button onClick={handleDecrement} className="buttonCount"> - </button>
                <p>{count}</p>
                <button onClick={handleIncrement} className="buttonCount"> + </button>
            </div>
            <button className="buttonAdd">Agregar producto al carrito</button>
        </div>
    )
}

export default Counter;