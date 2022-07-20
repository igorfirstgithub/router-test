import React, { useContext } from "react";
import { Context } from "../PhotoContext";

function Image(props) {
  const [hovered, setHovered] = React.useState(false);
  const { toggleIsFavorite } = useContext(Context);

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={props.img.url}
        className="image-grid"
        alt={`#${props.img.id}`}
      />

      {hovered && (
        <i
          onClick={() => toggleIsFavorite(props.img.id)}
          className="ri-heart-line favorite"
        >
          Hrt
        </i>
      )}
      {hovered && <i className="ri-add-circle-line cart">Bsk</i>}
    </div>
  );
}

export default Image;
