import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../PhotoContext";

function Header() {
  const { cartItems } = React.useContext(Context);

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x">
          {cartItems.length > 0 ? "BASKET" : "Basket"}
        </i>
      </Link>
    </header>
  );
}

export default Header;
