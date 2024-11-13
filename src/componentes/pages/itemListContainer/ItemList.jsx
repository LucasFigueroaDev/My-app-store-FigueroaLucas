import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ myProducts }) => {
    return (
        <div>
            {myProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;

