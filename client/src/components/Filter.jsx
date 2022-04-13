import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() { 

    const dispatch = useDispatch();
    const [filtro, setFiltro] = useState("");
    
    const changeFiltro = (e) => {
        e.preventDefault();
        setFiltro(e.target.value);
      };

      return(
        <div>
        <h5>Filtrar por Género</h5>
        <select onChange={(e) => changeFiltro(e)}>
          <option value="">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
        </div>
        
      )
      

}
