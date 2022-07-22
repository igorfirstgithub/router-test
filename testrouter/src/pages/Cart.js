import React from "react";
import { Context } from "../PhotoContext";
import { getClass } from "../utils";
//import Image from "../components/Image";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, emptyingCart } = React.useContext(Context);
  const PRICE = 5.99;
  const TOTAL = (PRICE * cartItems.length).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [placingOrder, setPlacingOrder] = React.useState(false);

  const itemsToBuy = cartItems.map((photo, index) => (
    <CartItem
      key={photo.id}
      img={photo}
      num={index}
      className={getClass(index)}
    />
  ));

  function orderPlaced() {
    emptyingCart();
    setPlacingOrder(false);
    console.log("Order placed");
  }

  function placeOrder() {
    setPlacingOrder(true);
    setTimeout(orderPlaced, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {itemsToBuy}
      <p className="total-cost">Total:{` ${TOTAL} `}</p>
      <div className="order-button">
        {cartItems.length > 0 && (
          <button onClick={placeOrder}>
            {placingOrder ? "Ordering..." : "Place Order"}
          </button>
        )}
      </div>
    </main>
  );
}

export default Cart;
