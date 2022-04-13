import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom"
import { getVideogame, clearVideogame } from "../actions/index";

function VideogameDetail() {

  const dispatch = useDispatch();
  const detailView = useSelector(state => state.videogameDetail)
  const loadingStatus = useSelector( (state)=>{
    return state.loading
  } )  
  const { idVideogame } = useParams()

  useEffect(() => {
    dispatch(clearVideogame())  
}, [])

  useEffect(() => {
    dispatch(getVideogame(idVideogame))

  }, [])

    return (
    <div>
{
        loadingStatus?<h1>Cargando ...</h1>:        
        <div>
          <p>{detailView.name}</p>
         {/*  <p> {detailView.name} </p>
             <img src={detailView.image} alt="img not found" width="400px" height="450px" /> 
            <p> {detailView.rating} </p>
            <p>Género: { detailView.genre.map( (genre) => genre+" / ") } </p> */}
        </div>
}

      <NavLink to="/home">
        <button>Volver</button>
      </NavLink>
    </div>
    )
  }


export default VideogameDetail


/* import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogame, clearVideogame } from "../actions/index";
import { useEffect } from "react";

function VideogameDetail() {
    return (
      <React.Fragment>
            <pre>Hola</pre>

</React.Fragment>
   )
  }

  export default VideogameDetail 
 */







/* import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import { useEffect } from "react";

export default function Landing(props) {
  console.log("ESTO ES EL ID??", props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);
  const myCharacter = useSelector((state) => state.detail);
  return (
    <div>
      <h1>Soy detail en /home/:id</h1>
      <div>
        <h1>{myCharacter.name}</h1>
        <img src={myCharacter.image} alt="" />
        <h2>Status: {myCharacter.status}</h2>
      </div>

      <NavLink to="/home">
        <button>Volver</button>
      </NavLink>
    </div>
  );
}
 */