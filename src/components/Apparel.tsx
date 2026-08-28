/**
 * Apparel component
 * Loads json product components using a custom hook (useFetch)
 */
import Products from "./Products";
// import useProductList from "./useShopifyProducts";
// import useFetch from "../Hooks/useFetch";
import data from "../data/db.json";

type Product = {
  image: string;
  name: string;
  price: string;
};

const Apparel = () => {
  // const { error, isLoading, data: products } = useProductList("apparel", 5)
  // const { error, isLoading, data: products } = useFetch("http://localhost:8000/products");
  const products: Array<Product> = data.products;

  // Product Card can be a reusable component since both apparel and accessory pages use

  return (
    <div>
      <div className="header-container">
        <h3 className="page-header">APPAREL</h3>
      </div>
      <Products products={products} />
    </div>
  );
};

export default Apparel;
