import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [myProducts, setMyProducts] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const filterProduct = products.filter((item) => item.category === name);
        let task = new Promise((res) => {
            res(name ? filterProduct : products);
        })
        task
            .then((resp) => {
                setMyProducts(resp)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Finally');
            })
    }, [name]);

    return <ItemList myProducts={myProducts} />
};

export default ItemListContainer;