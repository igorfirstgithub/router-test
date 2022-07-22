import React from "react";
import { Context } from "../PhotoContext";
import useHover from "../hooks/useHover";

function CartItem(props) {
  const { addRemToCart } = React.useContext(Context);

  const [hovered, ref] = useHover();
  //const [hovered, setHovered] = React.useState(false);

  return (
    <div className="cart-item">
      <i
        //onMouseEnter={() => setHovered(true)}
        //onMouseLeave={() => setHovered(false)}
        ref={ref}
        onClick={() => addRemToCart(props.img)}
        className="ri-delete-bin-line"
      >
        {hovered ? "REMOVE" : "Remove"}
      </i>
      <img src={props.img.url} width="130px" alt={props.img.div} />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
