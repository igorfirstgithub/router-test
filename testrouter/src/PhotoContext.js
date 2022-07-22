import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleIsFavorite(id) {
    setAllPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
    //console.log(allPhotos);
  }

  function addRemToCart(item) {
    if (cartItems.find((elem) => elem.id === item.id)) {
      /*let tempCart = [];               // imperative way to remove item from the cart
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id !== item.id) {
          tempCart.push(cartItems[i]);
        }
      }
      setCartItems(tempCart);
      */

      // declarative way to remove item from the cart
      setCartItems((prevCart) => prevCart.filter((el) => el.id !== item.id));
    } else {
      setCartItems((prevItems) => prevItems.concat(item));
    }
    console.log(cartItems);
  }

  function emptyingCart() {
    setCartItems([]);
  }

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleIsFavorite,
        addRemToCart,
        cartItems,
        emptyingCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
