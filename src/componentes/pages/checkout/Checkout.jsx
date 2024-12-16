import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './checkout.css';

const Checkout = () => {
    const { cart, totalPrices, totalQuantityProducts, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [paymentOption, setPaymentOption] = useState("");
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: ""
    });
    const [cardData, setCardData] = useState({
        nombreCompleto: "",
        numeroTarjeta: "",
        codigoSeguridad: "",
        fechaExpiracion: ""
    });
    const selectPaymentOption = (value) => {
        setPaymentOption((prev) => (prev === value ? "" : value));
    };

    const captureData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const cardDetails = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    }

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

        if (!paymentOption) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor elije un metodo de pago'
            })
            return;
        } 

        if (paymentOption === 'card') {
            if (!cardData.nombreCompleto || !cardData.codigoSeguridad || !cardData.fechaExpiracion || !cardData.numeroTarjeta) {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor rellena todos los campos'
                })
                return
            }

            if (!/^\d{16}$/.test(cardData.numeroTarjeta)) {
                Swal.fire({
                    title: 'Error',
                    text: 'El número de tarjeta debe tener 16 dígitos'
                });
                return;
            }

            if (!/^\d{2}\/\d{2}$/.test(cardData.fechaExpiracion)) {
                Swal.fire({
                    title: 'Error',
                    text: 'La fecha de expiración debe tener el formato MM/AA'
                });
                return;
            }
        }

        let total = totalPrices();

        let order = {
            buyer: userData,
            items: cart,
            paymentMethod : paymentOption === 'card' ? cardData : "transfer",
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

        let productsCollection = collection(db, 'products');
        order.items.forEach(el => {
            let refDoc = doc(productsCollection, el.id);
            updateDoc(refDoc, { stock: el.stock - el.quantity });
        });

        clearCart();

    };

    return (
        <>{orderId ? (<div className='checkout-page'>
            <div className='box-ticket'>
                <p className='txt'>Muchas gracias por tu compra</p>
                <p className='ticket'>Su número de ticket es: {orderId}</p>
            </div>
        </div>)
            : (<div className='checkout-page'>
                <div className='checkout-form'>
                    <h2 className='checkout-title'>Tus datos</h2>
                    <form className='form' action="POST" onSubmit={functionForm}>
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
                <div className='payments'>
                    <h2 className='payments-title'>Métodos de pago</h2>
                    <div className='payments-methods'>
                        <label htmlFor="">Abonar con tarjeta </label>
                        <input type="checkbox" checked={paymentOption === "card"} onChange={() => selectPaymentOption("card")} />
                    </div>
                    {paymentOption === "card" && <div>
                        <form action="POST" className='payments-form'>
                            <label htmlFor="">Número de tarjeta</label>
                            <input onChange={cardDetails} className='input-number' type="number" inputMode='numeric' placeholder='1234 1234 1234 1234' name='numeroTarjeta' />
                            <label htmlFor="">Nombre completo</label>
                            <input onChange={cardDetails} type="text" placeholder='Tu nombre' name='nombreCompleto' />
                            <label htmlFor="">Fecha de expiración</label>
                            <input onChange={cardDetails} type="text" placeholder='01/01' name='fechaExpiracion' />
                            <label htmlFor="">Codigo de vencimiento</label>
                            <input onChange={cardDetails} className='input-number' type="number" placeholder='123' name='codigoSeguridad' />
                        </form>
                    </div>
                    }
                    <div className='payments-transfer'>
                        <label htmlFor="">Abonar con transferencia </label>
                        <input type="checkbox" checked={paymentOption === "transfer"} onChange={() => selectPaymentOption("transfer")} />
                    </div>
                    {paymentOption === "transfer" && <div>
                        <p className='transfer-txt'>Seleccionaste transferencia. Recibirás los datos de pago por email. ¡Muchas Gracias!</p>
                    </div>
                    }
                </div>
            </div>)
        }
        </>
    )
}

export default Checkout