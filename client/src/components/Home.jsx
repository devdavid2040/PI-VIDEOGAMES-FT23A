import React from "react"
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getVideogames} from "../actions"

import {Link} from "react-router-dom"


export default function Hom(){

    const dispatch=useDispatch()
    const allVideogames=useSelector((state)=>state.videogames)

useEffect(()=>{
    dispatch(getVideogames())
},[])


function handleClick(e)
{
    e.preventDefault()
    dispatch(getVideogames())
}


return(
    <div>
        <Link to="/videogame">Crear Videojuego</Link>
    <button onClick={ (e)=>handleClick(e) }>Volver a cargar todos los Videojuegos</button>

        <div>
{/* //filtrar por orden alfabetico */}            
            <select>
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
            </select>
 {/* //filtrar por rating */}
            <select>
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
            </select>

 {/* //filtrar por genero */}
            {/* <select>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select> */}

  {/* //filtrar por origen de datos */}          
            <select>
             <option value="All">Todos</option>
             <option value="created">Creados</option>
             <option value="api">Existente</option>
             </select>

        </div>


    </div>
)

}