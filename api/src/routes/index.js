const { Router } = require('express');
require("dotenv").config();
const {API_KEY} = process.env;
const { Videogame, Genre } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* results representa un solo array, resultado de un solo request  ARRAY DEa la APi GAME */
/* DEVUELVO UN ARRAY DE OBJETOS GAME PRSONALIZADO, CONTENIENDO SOLAMENTE LOS DATOS NECESARIOS PARA LA RUTA PRINCIPAL */

const gamesAPI=(results)=>{
        const response=results.map(attr => {
        return{
          id:attr.id,
          genre:attr.genres.map(indice=>indice.name),
          image:attr.background_image,
          name: attr.name
            };
    }
        )
       return response
  }



//devuelve en un solo array todos los juegos de la API, logrando agrupar los resultados de los multiples pedidos de la API, de forma personaizada para la ruta principal.
const allGamesAPI=()=>{

  let all=[];

  let urls = [
    `https://api.rawg.io/api/games?key=${API_KEY}`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  ]
  let requests = urls.map(url =>axios.get(url) )  
      Promise.all(requests)
      .then(responses => 
        {
         all=responses.map(response=>gamesAPI(response.data.results))
  /*       return all.flat() */ 
      }
      )
      if(all.length>0) return all.flat()
}


router.get('/', async(req, res) => 
{
 
  let urls = [
    `https://api.rawg.io/api/games?key=${API_KEY}`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  ]
  let requests = urls.map(url =>axios.get(url) )  
      Promise.all(requests)
      .then(responses => 
        {
        let all=responses.map(response=>gamesAPI(response.data.results))
        res.json(all.flat())  
      }
      ) 
 
 


}

)


module.exports = router;
