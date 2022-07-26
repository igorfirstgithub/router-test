import React, { useContext } from "react";
import { Context } from "../PhotoContext";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = React.useState(false);
  //const [carted, setCarted] = React.useState(false); // useless because reinits after every render
  const { toggleIsFavorite, addRemToCart, cartItems } = useContext(Context);

  let isInCart = cartItems.find((el) => el.id === img.id) ? true : false;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt={`#${img.id}`} />

      {(hovered || img.isFavorite) && (
        <i
          onClick={() => toggleIsFavorite(img.id)}
          className="ri-heart-line favorite"
        >
          {img.isFavorite ? "HRT" : "Hrt"}
        </i>
      )}

      {(hovered || isInCart) && (
        <i
          onClick={() => {
            addRemToCart(img);
            //setCarted((prevCart) => !prevCart);
          }}
          className="ri-add-circle-line cart"
        >
          {isInCart ? "BSK" : "Bsk"}
        </i>
      )}
    </div>
  );
}

//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

Image.propTypes = {
  className: PropTypes.string,

  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default Image;
