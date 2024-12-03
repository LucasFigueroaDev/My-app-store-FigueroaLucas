import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css';
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where, Query } from "firebase/firestore";

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

    return (
        <>
            <h2 className="item-title">Los mejores productos del mercado</h2>
            <ItemList myProducts={myProducts} />
        </>


    )
};

export default ItemListContainer;