
const initialState={
videogames:[]
}


function rootReducer(state=initialState, action){
switch (action.type) {
    case "GET_VIDEOGAMES":
        return{
            ...state,
            videogames:action.payload
        }
        break;

    default:
        break;
}



}

export default rootReducer
