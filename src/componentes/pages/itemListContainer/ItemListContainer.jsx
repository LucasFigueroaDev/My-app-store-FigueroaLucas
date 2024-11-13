import { useEffect, useState } from "react";
import { products } from "../../../products/products.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [myProducts, setMyProducts] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        let leakedProducts = products.filter((item) => item.category === name);

        let task = new Promise((resolve) => {
            resolve(name ? leakedProducts : products);
        });
        task
            .then((resp) => {
                setMyProducts(resp);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finished process");
            })
    }, [name]);

    return <ItemList myProducts={myProducts} />
};

export default ItemListContainer;