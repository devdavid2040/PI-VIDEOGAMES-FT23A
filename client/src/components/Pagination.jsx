import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadData} from "../actions/index"


export default function Pagination() { 
    const dispatch = useDispatch();

    const [pages, setPages] = useState(0);


    const videogamesView = useSelector( (state)=>{
      return state.videogameList
  } )
  

    const prev = (e) => {
        e.preventDefault();
        if (pages <= 0) {
          setPages(0);
        } else {
          setPages(pages - 6);
        }
      };
    
      const next = (e) => {
        e.preventDefault();
        if (videogamesView.length < 6) {
          return;
        } else {
          setPages(pages + 6);
        }
      };
    

return (
  <div>
    <h1>Hola</h1>
  </div>
)

}