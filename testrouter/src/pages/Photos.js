import React from "react";
import { Context } from "../PhotoContext";

import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = React.useContext(Context);
  //  console.log(allPhotos);

  const allToImage = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));

  // Get the allPhotos array from context
  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

  return (
    <main className="photos">
      {/* <h1>Images go here</h1> */}
      {allToImage}
    </main>
  );
}

export default Photos;
