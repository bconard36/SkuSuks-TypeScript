/**
 * Renders the accessories product page using product data
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

const Accessories = () => {
  const products: Array<Product> = data.accessories;
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
