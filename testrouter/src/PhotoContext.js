import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([1, 2]);

  function toggleIsFavorite(id) {
    setAllPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
    console.log(allPhotos);
  }

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider value={{ allPhotos, toggleIsFavorite }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
