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
        <h3 className="cart-title">Shopping Cart</h3>
        <p className="cart-text">Shopify Integration Coming Soon!</p>
        <Link to="/apparel" className="cart-link">
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default Cart;
