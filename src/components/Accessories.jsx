/**
 * Accessories component
 * Loads json product components using a custom hook (useFetch)
 */
import Products from "./Products";
// import useProductList from "./useShopifyProducts";
import data from "../data/db.json";
// import ProductCard from "./ProductCard";

const Accessories = () => {
  // const { error, isLoading, data: products } = useProductList("accessories", 5);
  // const { error, isLoading, data: products } = useFetch("http://localhost:8000/accessories");
  const products = data.accessories;

  // Product Card can be a reusable component since both apparel and accessory pages use

  return (
    <div>
      <div className="header-container">
        <h3 className="page-header">ACCESSORIES</h3>
      </div>
      <Products products={products} />
    </div>
  );
};

export default Accessories;
