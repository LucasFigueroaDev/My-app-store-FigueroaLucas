import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, where, Query } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import PuffLoader from "react-spinners/PuffLoader";
import ItemList from "./ItemList";

import './itemListContainer.css';

const ItemListContainer = () => {
    const [myProducts, setMyProducts] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        let refCollection = productsCollection;
        if (name) {
            const productsCollectionFiltered = query(productsCollection, where('category', '==', name));
            refCollection = productsCollectionFiltered
        }

        const getProducts = getDocs(refCollection);
        getProducts.then((res) => {
            let products = res.docs.map((el) => {
                return { ...el.data(), id: el.id }
            });
            setMyProducts(products);
        })
    }, [name]);

    if (myProducts.length === 0) {
        return <div className="page"><div className="spinners"><PuffLoader color="rgba(0, 89, 255, 1)" /></div></div>
    } else {
        return (
            <div>
                <h2 className="item-title">Los mejores productos del mercado</h2>
                <ItemList myProducts={myProducts} />
            </div>
        )
    }

};

export default ItemListContainer;