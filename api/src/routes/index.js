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



const getDbInfo = async () => {
  return await Videogame.findAll({
    attributes: ['id', 'image','name','rating'],
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
}

//devuelve en un solo array todos los juegos de la API, logrando agrupar los resultados de los multiples pedidos de la API, de forma personaizada para la ruta principal.
const getApiInfo=async()=>{
  let urls = [
    `https://api.rawg.io/api/games?key=${API_KEY}`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  ]
  let requests = urls.map(url =>axios.get(url) )  
       let res =await Promise.all(requests)
      .then(responses => 
        {
          return responses.map(response=>getRequestAPI(response.data.results))

        }
      ).catch(err => console.log(err))
 
       if(res){  return res.flat()}
    }


/* result representa un solo array, resultado de un solo request  ARRAY DEa la APi GAME */
/* DEVUELVO UN ARRAY DE OBJETOS GAME PRSONALIZADO, CONTENIENDO SOLAMENTE LOS DATOS NECESARIOS PARA LA RUTA PRINCIPAL */
const getRequestAPI=(result)=>{
        const response=result.map(attr => {
        return{
          id:attr.id,
          genre:attr.genres.map(indice=>indice.name),
          image:attr.background_image,
          name: attr.name,
          rating: attr.rating
            };
    }
        )
       return response
  }


  const getAllGames = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal =[...dbInfo,...apiInfo]
    return infoTotal
  }




  const dataAPICountry=async()=>{
    try{  
      const url ="https://restcountries.com/v2/all";
          
          const countriesUrl = await axios(url)
          const response=countriesUrl.data.map(attr => {
          return{
              code: attr.alpha3Code,
              name: attr.name,
              flag: attr.flag,
              population: attr.population,
              region: attr.region, 
              };
      }
          )
         return response
    }
      catch(error){console.log(error)}
    }

    

    const getDataAPIGenre=async()=>{
      try{  
        const url =`https://api.rawg.io/api/genres?key=${API_KEY}`;
            
            const genresUrl = await axios(url)
            const response=genresUrl.data.results.map(attr => {
            return{
                name: attr.name 
                };
              }
            )
            await Genre.bulkCreate(response)

           return Genre.findAll()
      }
        catch(error){console.log(error)}
      }
  

/* filtrar por género 
filtrar por videojuego existente o agregado por nosotros

ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético 
ordenar tanto ascendentemente como descendentemente los videojuegos por rating
 */

router.get('/videogames', async(req, res) => 
{

if(req.query.name)
{
 let result=await (await getAllGames()).filter(attr=>attr.name.toLowerCase().includes(req.query.name.toLowerCase())) 
return res.json(result)
}
return res.json(await getAllGames())

})

//estilo diego
router.get('/videogame/:gameId', async(req, res) => 
{
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${req.params.gameId}?key=${API_KEY}`)


    let game={
      id: response.data.id,
      genre:response.data.genres.map(indice=>indice.name),
      image:response.data.background_image,
      name: response.data.name,
      description: response.data.description,
      platforms:response.data.platforms.map(indice=>indice.platform.name),
      rating:response.data.rating,
      releaseDate:response.data.released
    }

    res.json(game)
  } catch (error) {
    
    if(error.response?.status === 404) {
      Videogame.findByPk(req.params.gameId).then(videogame => {
        if(videogame) return res.json(videogame)
        return res.sendStatus(404)
      })
    } else {
      res.status(500).json({ error: 'Ups!!! 😱' })
    }
  }
  
})


//facil
router.get('/genres', async(req, res) => 
{

   res.json(await getDataAPIGenre())

})



/* datos de prueba
{"difficulty": 1,"duration": 1,"name": "Ski","season": "Autumn", "countryid":["ARG","AFG","ALA"]} 
{"difficulty": 3,"duration": 3,"name": "Voley","season": "Spring", "countryid":["ARG"]}  
{"difficulty": 2,"duration": 2,"name": "Rafting","season": "Spring", "countryid":["ALB"]} 
 */

/* router.post("/activity", async (req, res)=>{
  const activity=req.body
try { 
       let [act]=await Activity.findOrCreate({
           where:{
               difficulty:activity.difficulty,
               duration:activity.duration,
               name:activity.name,
               season:activity.season
           }
       })

await act.setCountries(activity.countryid)
       return res.json(act);

   } catch (error) {
       console.log(error);
   }
}) */


/* datos de prueba
{"description": "AAA","image": "111","name": "ZZZ","platforms": ["Action","Adventure","RPG"], "rating": 4.45,"releaseDate": "2013-09-15","genreid":[1,2,3]}

{"description": "BBB","image": "222","name": "XXX","platforms": ["Shooter","Puzzle","Massively Multiplayer"], "rating" 4.46,"releaseDate": "2013-09-16","genreid":[1]} 

{"description": "CCC","image": "333","name": "CCC","platforms": ["Action","Adventure","Massively Multiplayer"], "rating": 4.47,"releaseDate": "2013-09-17","genreid":[4]} 
 */
router.post('/videogame', async(req, res) => 
{
  const videogame=req.body
  try { 
         let [game]=await Videogame.findOrCreate({
             where:{
              description: videogame.description,
              image: videogame.image,
              name: videogame.name,
              platforms: videogame.platforms,
              rating: videogame.rating,
              releaseDate: videogame.releaseDate
             }
         })
  
  await game.setGenres(videogame.genreid)
         return res.json(game);
  
     } catch (error) {
         console.log(error);
     }

})

/* 
[
  {
    "id": "88655024-f742-4dc6-9671-6df1467f34b7",
    "image": "111",
    "name": "ZZZ",
    "rating": 4.45,
    "genres": [
      {
        "name": "Action"
      },
      {
        "name": "Indie"
      },
      {
        "name": "Adventure"
      }
    ]
  },
  {
    "id": 3498,
    "genre": [
      "Action",
      "Adventure"
    ],
    "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "name": "Grand Theft Auto V",
    "rating": 4.47
  } */







module.exports = router;
