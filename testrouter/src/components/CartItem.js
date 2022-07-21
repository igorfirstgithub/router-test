import React from "react";
import { Context } from "../PhotoContext";

function CartItem(props) {
  const { addRemToCart } = React.useContext(Context);
  return (
    <div className="cart-item">
      <i onClick={() => addRemToCart(props.img)} className="ri-delete-bin-line">
        Remove
      </i>
      <img src={props.img.url} width="130px" alt={props.img.div} />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
