import * as actions from "./actionTypes";

import axios from "axios";

export function loadData() {
  return (dispatch)=>{
      dispatch({type: actions.LOAD_DATA_REQUEST})
  
      let dataURL="http://localhost:3001/videogames"
  
      axios.get(dataURL).then((response)=>{
          dispatch({type: actions.LOAD_DATA_SUCCESS, payload:response.data})
      }).catch((error)=>{
          dispatch({type: actions.LOAD_DATA_FAILURE, payload:error})  
      })
  
  } 
  
  }

  export function getVideogame(idVideogame) {
    return (dispatch) => {
      dispatch({type: actions.LOAD_VIDEOGAME_REQUEST_BY_NAME})

      let dataURL=`http://localhost:3001/videogame/${idVideogame}`
      axios.get(dataURL).then(response => {
        console.log(response.data)
        dispatch({ type: actions.SET_VIDEOGAME_DETAIL, payload: response.data})
      }).catch(error => {
        dispatch({ type: actions.SET_VIDEOGAME_FAILURE, payload: error })
      })
    }
  }
  
  export function clearVideogame() {
    return {
      type: actions.CLEAN_VIDEOGAME_DETAIL, payload: undefined
    }
  }


export function getVideogamesByName(name){
  return (dispatch) => {

    let dataURL=`http://localhost:3001/videogames?name=${name}`
    axios.get(dataURL).then(response => {
      console.log(response.data)
      dispatch({ type: actions.LOAD_VIDEOGAME_BY_NAME, payload: response.data})
    }).catch(error => {
      dispatch({ type: actions.LOAD_VIDEOGAME_BY_NAME_FAILURE, payload: error })
    })
  }
}


/* export function getGenres(){
  return (dispatch) => {

    let dataURL=`http://localhost:3001/genres`
    axios.get(dataURL).then(response => {
      console.log(response.data)
      dispatch({ type: actions.LOAD_VIDEOGAME_GENRES, payload: response.data})
    }).catch(error => {
      dispatch({ type: actions.LOAD_VIDEOGAME_GENRES_FAILURE, payload: error })
    })
  }
} */

//-------------------------

/* export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`/types` || "http://localhost:3001/types");
    dispatch({ type: actions.GET_TYPES, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const createPokemon = (input) => async (dispatch) => {
  try {
    const res = await axios.post(
      `/pokemons` || "http://localhost:3001/pokemons/",
      input
    );
    dispatch({ type: actions.POST_POKEMON, payload: res.data });
  } catch (err) {
    alert("BIG TIME ERROR Pokemon fail");
  }
};

export const typeFilter = (types, array) => (dispatch) => {
  console.log(types);
  const types1 = new RegExp(types);
  const res = array.filter((c) =>
    c.types
      .map((x) => x.name)
      .toString()
      .match(types1)
  );
  dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  if (types === "all") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [...array] });
  }
};

export const dataFilter = (data, array) => (dispatch) => {
  console.log(data);
  if (data === "api") {
    const res = array.filter((d) => typeof d.id === "number");
    dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  }
  if (data === "db") {
    const res = array.filter((d) => typeof d.id === "string");
    dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  }
  if (data === "all") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [...array] });
  }
  if (data === "null") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [] });
  }
};

export const orderFilter = (data, array) => (dispatch) => {
  if (data === "az") {
    const asc = array.sort((a, b) => {
      const first = a.name;
      const last = b.name;
      if (first < last) {
        return -1;
      }
      if (first > last) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({ type: actions.FILTER_POKEMON, payload: [...asc] });
  }

  if (data === "za") {
    const desc = array.sort((a, b) => {
      const first = a.name;
      const last = b.name;
      if (first > last) {
        return -1;
      }
      if (first < last) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({ type: actions.FILTER_POKEMON, payload: [...desc] });
  }
  if (data === "attack+") {
    const attack = array.sort((a, b) => b.attack - a.attack);
    dispatch({ type: actions.FILTER_POKEMON, payload: [...attack] });
  }
  if (data === "attack-") {
    const attack = array.sort((a, b) => a.attack - b.attack);
    dispatch({ type: actions.FILTER_POKEMON, payload: [...attack] });
  }
  if (data === "null") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [] });
  }
}; */

//-------------------------




/* import {LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE} from "./actionTypes"

import axios from "axios";

let loadData = ()=>{
  return (dispatch)=>{
      dispatch({type:LOAD_DATA_REQUEST})
  
      let dataURL="https://restcountries.com/v2/all"
  
      axios.get(dataURL).then((response)=>{
          dispatch({type:LOAD_DATA_SUCCESS, payload:response.data})
      }).catch((error)=>{
          dispatch({type:LOAD_DATA_FAILURE, payload:error})
      
      
      })
  
  } 
  
  }
  
  export {loadData} */



  
/* import axios from "axios";

export function getCharacters(page, order, filtro) {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/character?page="+ page + "&order="+order + "&filter="+filtro, {
    });
    return dispatch({ type: "GET_CHARACTERS", payload: json.data });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character/" + id);
      return dispatch({ type: "GET_DETAILS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameCharacters(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character?name=" + name);

      return dispatch({ type: "GET_NAME_CHARACTERS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameCharactersForm(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character?name=" + name);
      return dispatch({ type: "GET_NAME_CHARACTERS_FORM", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function clearNameCharactersForm() {
  return  function (dispatch) {
   return dispatch({ type: "CLEAR_NAME_CHARACTERS_FORM" });
  }
}

export function postCapter(name, charid) {
  return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/episode",{
      name,
      charid,
    });
    console.log(response);
    return response;
  }
}  */