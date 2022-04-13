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
{loadingStatus ? (
       <h1>Cargando ...</h1>
      ) : (
        <div>
        <h1>{detailView.name}</h1>
        <img src={detailView.image} alt="" />
          <h4>Rating: {detailView.rating}</h4>
          <h4>
            Fecha de Lanzamiento: {detailView.releasedDate}
          </h4>
          <h4>
            Plataformas: {detailView.platforms?.join(",  ")}
          </h4>
          <h4>
            Generos: {detailView.genre?.join(",  ")}
          </h4>
          <h4>Descripción: </h4>
          <p>
            { detailView.description }
          </p>
        
        <NavLink to="/home">
          <button>Volver</button>
        </NavLink>
      </div>
        
      )}
    </div>
  );
}
  
export default VideogameDetail

