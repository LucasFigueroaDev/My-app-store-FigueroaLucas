import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './checkout.css';

const Checkout = () => {
    const { cart, totalPrices, totalQuantityProducts, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: ""
    });

    const captureData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const cancelOrder = () => {
        setUserData({
            nombre: "",
            userEmail: "",
            telefono: ""
        });
        clearCart();
        navigate('/');
    };

    const functionForm = (e) => {
        e.preventDefault();

        if (!userData.nombre || !userData.userEmail || !userData.telefono) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor rellena todos los campos'
            })
            return;
        }

        if (!/\S+@\S+\.\S+/.test(userData.userEmail)) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor introduce un email valido'
            })
            return;
        }

        let total = totalPrices();

        let order = {
            buyer: userData,
            items: cart,
            total,
        }

        let ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Gracias por su compra",
                    showConfirmButton: false,
                    customClass: {
                        popup: 'popup',
                        title: 'title'
                    },
                    timer: 1500
                });
                setOrderId(res.id)
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo un error en la compra"
                });
            })
            clearCart();
    };

    return (
        <>{orderId ? (<div className='checkout-page'>
            <div className='box-ticket'>
            <p className='txt'>Muchas gracias por tu compra</p>
            <p className='ticket'>Su número de ticket es: {orderId}</p>
            </div>
        </div>)
            :(<div className='checkout-page'>
                <div className='checkout-form'>
                    <h2 className='checkout-title'>Tus datos</h2>
                    <form className='form' action="" onSubmit={functionForm}>
                        <label htmlFor="">Tu nombre: </label>
                        <input type="text" onChange={captureData} name='nombre' placeholder='Tu nombre' />
                        <label htmlFor="">Tu correo: </label>
                        <input type="email" onChange={captureData} name='userEmail' placeholder='Tu correo' />
                        <label htmlFor="">Tu teléfono: </label>
                        <input type="number" onChange={captureData} name='telefono' placeholder='Tu telefono' />
                        <button className='btn-aceptar'>Aceptar</button>
                    </form>
                    <button className='btn-cancel' onClick={cancelOrder}>Cancelar</button>
                </div>
                <div className='checkout-details'>
                    <h2 className='details-title'>Detalle de tu compra</h2>
                    <p className='details-products'>Productos: {totalQuantityProducts()}</p>
                    <p className='details-total'>Total a pagar: ${totalPrices()}</p>
                </div>
            </div>)
        }
        </>
    )
}

export default Checkout