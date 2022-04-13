/* import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postCapter,
  getNameCharactersForm,
  clearNameCharactersForm,
} from "../actions/index";

export default function Chapter(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("ESTAS SON MIS PROPS", props);

  const characters = useSelector((state) => state.charactersForm);
  const [name, setName] = useState("");
  const [charid, setCharid] = useState([]);
  const [charName, setCharName] = useState("");
  const [charObj, setCharObj] = useState([]);

  useEffect(() => {
    setCharObj([...charObj, ...characters]);
    setCharid([...new Set(charObj.map((c) => c.id))]);
  }, [dispatch, characters]);

  useEffect(() => {
    setCharid([...new Set(charObj.map((c) => c.id))]);
  }, [dispatch, charObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCapter(name, charid));
    alert("El episodio se ha creado");
    dispatch(clearNameCharactersForm());
    history.push("/home");
  };
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCharName = (e) => {
    e.preventDefault();
    setCharName(e.target.value);
  };
  const handleGetCharName = async (e) => {
    e.preventDefault();
    dispatch(getNameCharactersForm(charName));
  };
  const handleDeleteChar = async (e, id) => {
    e.preventDefault();
    setCharObj(charObj.filter((c) => c.id !== id));
    setCharid([...new Set(charObj.map((c) => c.id))]);
  };

  return (
    <div>
      <h1>SOY CHAPTER EN /CHAPTER</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder=" Nombre.."
          onChange={(e) => {
            handleName(e);
          }}
        />
        <input
          type="text"
          placeholder=" Buscar personaje..."
          onChange={(e) => handleCharName(e)}
        />
        <button onClick={(e) => handleGetCharName(e)}>Buscar</button>
        <div>
          {charObj?.map((c) => (
            <div className="charObjInt" key={c.id}>
              <button onClick={(e) => handleDeleteChar(e, c.id)}>x</button>
              <img src={c.image} alt="img not found" />
              <h5>{c.name}</h5>
            </div>
          ))}
        </div>
        <input type="submit" />
      </form>
      <NavLink to="/home">
        <button>Volver</button>
      </NavLink>
    </div>
  );
}
 */