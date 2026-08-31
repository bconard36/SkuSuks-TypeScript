import { Link } from "react-router";

const Cart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-logo">
          <img
            className="cart-logo-img"
            src="../../Images/HSW_Logo2.png"
            alt="SkuSuks logo"
          />
        </div>
        <h3 className="cart-title">Shopify Integration Coming Soon!</h3>
        {/* <p className="cart-text">View all products on Instagram</p> */}
        <Link
          to="https://www.instagram.com/skusuks/"
          target="_blank"
          className="cart-link"
        >
          View Products on Instagram
        </Link>
        <Link to="/" className="cart-link">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Cart;
