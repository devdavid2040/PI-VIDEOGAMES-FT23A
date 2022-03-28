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


/* preguntar */
//devuelve en un solo array todos los juegos de la API, logrando agrupar los resultados de los multiples pedidos de la API, de forma personaizada para la ruta principal.
const allGames=async()=>{
  //version async await funciona
  /* const db =await Videogame.findAll({
    attributes: ['id', 'image','name'],
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  
  let urls = [
    `https://api.rawg.io/api/games?key=${API_KEY}`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  ]
  let requests = urls.map(url =>axios.get(url) )  
      let alls=await Promise.all(requests)
         let result=alls.map(response=>gamesAPI(response.data.results))

        return [...db, ...result.flat()]
      } */
      
 
//----
//version Promises
let all;
const db =await Videogame.findAll({
  attributes: ['id', 'image','name'],
  include: {
    model: Genre,
    attributes: ["name"],
    through: {
      attributes: [],
    },
  },
});

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
        return [...db, ...all.flat()]

        }
      ).catch(err => console.log(err))
       
}



router.get('/', async(req, res) => 
{
 

  //version Promises funciona
  /* let urls = [
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
        res.json([...db, ...all.flat()])

        }
      )  */

//version async await funciona
 /*      let urls = [
        `https://api.rawg.io/api/games?key=${API_KEY}`,
        `https://api.rawg.io/api/games?key=${API_KEY}&page=2`,
        `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
        `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
        `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
      ]

      let requests = urls.map(url =>axios.get(url) )  
          let alls= await Promise.all(requests)
         let result= alls.map(response=>gamesAPI(response.data.results))
          res.json([...db, ...result.flat()])
 */

          await allGames().then(resp=> { if(resp)console.log(resp)  }) 
/* res.json(await allGames()) */ //funciona bien solamente con async await funcion auxiliar
      
})

/* if(req.query.name){
  try{
      let country=await Country.findAll({
          where:{
              name:{
                  [Op.iLike]:'%'+req.query.name+'%'
              }
          }
      })
      return res.json(country);
  }
  catch(error){
      console.log(error)
  }
}  */

module.exports = router;
