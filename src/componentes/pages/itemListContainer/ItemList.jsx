import ProductCard from "../../common/productCard/ProductCard";
import './itemList.css'

const ItemList = ({ myProducts }) => {
    return (
        <div className="ItemContainer">
            {myProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;

