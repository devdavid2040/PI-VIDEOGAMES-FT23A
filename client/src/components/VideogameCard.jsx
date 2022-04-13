

import React from "react"
export default function VideogameCard({genre, image, name, rating})
{

return(
    <div>
        <h3>{name}</h3>
        <h5>Rating: {rating}</h5>
        {/* <h6>Género: {genre}</h6> */}
        {/* <h6>Género: {<ul> genre.map( (genre) => <li>genre</li> )  </ul> } </h6> */}
        <h6>Género: { genre.map( (genre) => genre+" / ") } </h6>
        <img src={image} alt="img not found" width="200px" height="250px" />

    </div>
)

}

/* Card
genre image name  rating
 */



/* detail
description *
image:
name *
platforms *
rating
releaseDate */




/* import React from "react";

export default function CharCard({ name, image }) {
  return (
    <div>
      <h5>{name}</h5>
      <img src={image} alt="img not found" width="200px" height="200px" />
    </div>
  );
}
 */