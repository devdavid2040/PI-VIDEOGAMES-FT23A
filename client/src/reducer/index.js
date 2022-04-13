import * as actions from "../actions/actionTypes"


let initialState={
    videogameList:[],
    loading: false,
    errorMessage: "",
    videogameDetail:{},
    videogameGenres:[]
}


let videogameReducer=(state=initialState, action)=>{
let {type, payload}=action
switch(type)
{
    case actions.LOAD_DATA_REQUEST:
        return {...state, 
                loading:true}

     case actions.LOAD_DATA_SUCCESS:
        return {...state, 
                loading:false,
                videogameList:payload
            }
       case actions.LOAD_DATA_FAILURE:
        return {...state, 
                errorMessage:payload}

                    
        case actions.SET_VIDEOGAME_DETAIL: {
        return {
                ...state,
                loading:false,
                videogameDetail: action.payload
                }
        }

        case actions.SET_VIDEOGAME_FAILURE:
                return {...state, 
                    errorMessage:payload}
        
        case actions.CLEAN_VIDEOGAME_DETAIL:
            return {...state, 
                videogameDetail:{}
                }

      
        case actions.LOAD_VIDEOGAME_REQUEST_BY_NAME:
            return {...state, 
            loading:true}

        case actions.LOAD_VIDEOGAME_BY_NAME:
        return {...state, 
                loading:false,
                videogameList:payload
            }

            case actions.LOAD_VIDEOGAME_BY_NAME_FAILURE:
                return {...state, 
                    errorMessage:payload}
        
        case actions.LOAD_VIDEOGAME_GENRES:
            return {...state, 
                videogameGenres:payload
            }

            case actions.LOAD_VIDEOGAME_GENRES_FAILURE:
                return {...state, 
                    errorMessage:payload}

        default: return state;
}

}

export {videogameReducer }



/* const initialState = {
    characters: [],
    charactersForm: [],
    detail: [],
  };

  function rootReducer(state = initialState, action) {
      switch(action.type){
          case "GET_CHARACTERS":
              return {
                  ...state,
                  characters: action.payload
              }
          case "GET_NAME_CHARACTERS":
              return {
                  ...state,
                  characters: action.payload
              }
          case "GET_NAME_CHARACTERS_FORM":
              return {
                  ...state,
                  charactersForm: action.payload
              }
          case "CLEAR_NAME_CHARACTERS_FORM":
              return {
                  ...state,
                  charactersForm: []
              }
          case "GET_DETAILS":
              return {
                  ...state,
                  detail: action.payload
              }
          default:
              return state;
      }
  }
  
  export default rootReducer; */