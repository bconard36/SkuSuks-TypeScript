import { Link } from "react-router";

type Product = {
  image: string;
  name: string;
  price: string;
};

type ProductCardProps = {
  product: Product;
};

/**
 * Renders a product card displaying product information and an order
 * @param product - product information to display
 */
const ProductCard = ({ product }: ProductCardProps) => {
  // const store = process.env.REACT_APP_STORE_DOMAIN;

  // toShopify will be linked to the order button
  // const toShopify = () => {
  //     window.location.href = `https://${store}/products/${product.handle}`;
  // }

  return (
    <div className="product">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <h3>{product.name}</h3>
      {/* 
            Once Shopify is connected, use below
            <h3>{product.title}</h3>
            <p>
                {product.price?.amount 
                ? `${product.price?.amount} ${product.price?.currencyCode}`
                : "Price Unavailable"}
            </p> */}
      <Link to="/cart">
        <button className="order-button">View Product</button>
      </Link>
    </div>
  );
};

export default ProductCard;
