import React from "react";
import { Context } from "../PhotoContext";
import { getClass } from "../utils";
//import Image from "../components/Image";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = React.useContext(Context);
  const itemsToBuy = cartItems.map((photo, index) => (
    <CartItem
      key={photo.id}
      img={photo}
      num={index}
      className={getClass(index)}
    />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {itemsToBuy}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
