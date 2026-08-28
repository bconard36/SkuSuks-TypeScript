/**
 * Product component for SkuSuks apparel and accessory pages
 * Renders product cards for each product
 */

import ProductCard from "./ProductCard";

type Product = {
  image: string;
  name: string;
  price: string;
};

type ProductsProps = {
  products: Product[];
};

/**
 * Renders a collection of product cards from the provided products
 * @param products - array of products to display
 */
const Products = ({ products }: ProductsProps) => {
  return (
    <div>
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
