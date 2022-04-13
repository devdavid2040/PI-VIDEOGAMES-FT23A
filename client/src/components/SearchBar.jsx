
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../actions/index";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  
  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getVideogamesByName(name));
  };
  return (
    <div className="divSearch">
      <input
        type="text"
        placeholder=" Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => handleClick(e)}>Buscar</button>
    </div>
  );
}


/* import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../actions/index";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getNameCharacters(name));
  };
  return (
    <div className="divSearch">
      <input
        type="text"
        placeholder=" Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => handleClick(e)}>Buscar</button>
    </div>
  );
}
 */