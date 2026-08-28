/**
 * Renders the apparel product page using product data
 * from the local JSON database.
 */
import Products from "./Products";
import data from "../data/db.json";
// Shopify Imports
// import useProductList from "./useShopifyProducts";

type Product = {
  image: string;
  name: string;
  price: string;
};

const Apparel = () => {
  const products: Array<Product> = data.products;
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
