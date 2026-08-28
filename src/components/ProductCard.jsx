/**
 * Product Card component 
 * @param {JSON} product - single product object (apparel or accessory item) 
 * @returns A product card element to be rendered in the parent components
 */
const ProductCard = ({ product }) => {

    // const store = process.env.REACT_APP_STORE_DOMAIN;

    // toShopify will be linked to the order button
    // const toShopify = () => {
    //     window.location.href = `https://${store}/products/${product.handle}`;
    // }

    return ( 
        <div className="product">
            <div className="product-image-container">
                <img
                src={product.image}
                alt={product.alt || product.title}
                className="product-image"
                />
            </div>

            <h3>{product.name}</h3>
            <p>
                {product.price}
            </p>
            {/* 
            Once Shopify is connected, use below
            <h3>{product.title}</h3>
            <p>
                {product.price?.amount 
                ? `${product.price?.amount} ${product.price?.currencyCode}`
                : "Price Unavailable"}
            </p> */}

            <button className="order-button">
                Order Now
            </button>
        </div>
     );
}
 
export default ProductCard;