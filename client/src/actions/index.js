import axios from "axios"

export function getVideogames()
{
    return async function(dispatch)
    {
        const json=await axios.get("http://localhost:3001/videogames")

        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: json.data
        })

    }


}