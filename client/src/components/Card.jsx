import React from "react"

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



export default function Card({genre, image, name, rating})
{

return(
    <div>
        <h3>{name}</h3>
        <h5>{rating}</h5>
        <img src={image} alt="img not found" width="200px" height="250px" />
    </div>
)

}