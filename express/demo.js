/* 6 atributos:   
ID: *
Description *
Name *
Platforms *
Rating
Release date
 */

/* try {
  axios
        .get(URL)
        .then((response) => response.data)
        .then((data) => res.json(data))
        .catch((err) => console.log(err))

} catch (error) {
  console.log(error)
} */
 

//------------------------------------

const { Router } = require('express');


const axios = require("axios")
require("dotenv").config();
const {API_KEY} = process.env;
const { v4: uuidv4 } = require("uuid");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => 
{
   //generar de forma dinamica la ruta de las urls, en otra funcion
  const limit=req.query.limit;

 
 const URL =`https://api.rawg.io/api/games?key=${API_KEY}`
 const URL2=`https://api.rawg.io/api/games?key=${API_KEY}&page=2`;
 const URL3=`https://api.rawg.io/api/games?key=${API_KEY}&page=3`
 const URL4=`https://api.rawg.io/api/games?key=${API_KEY}&page=4`
 const URL5=`https://api.rawg.io/api/games?key=${API_KEY}&page=5`


 let urls = [
  'https://api.rawg.io/api/games?key=${API_KEY}',
  'https://api.rawg.io/api/games?key=${API_KEY}&page=2',
  `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
  `https://api.rawg.io/api/games?key=${API_KEY}&page=4`,
  `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
];

//version larga usando axios
/* let requests = urls.map((url) =>{ try {axios.get(url) } catch (error) { console.log(error)} 
} ) */


let requests = urls.map(url =>axios.get(url) )  

Promise.all(requests)
    .then(responses => console.log(responses))
    

/* let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];
let requests = urls.map(url => axios(url));
Promise.all(requests)
  .then(responses => 
    responses.forEach( //es un arreglos de responses, de cada pedido axios distinto
    response => console.log(`${response.data.url}: ${response.status}`)
    ));
 */

    //otra version, usando map. me gusta
    /*     Promise.all(requests)
    .then(responses => 
      {let res=responses.map(response=>response.data.url)
      console.log(res)}
      ) */

 try {
  axios
        .get(URL)
        .then((response) => response.data)
        .then((data) => 
         { 
        let games={
          id:data.results[0].id,
          genre:data.results[0].genres.map(indice=>indice.name),
          image:data.results[0].background_image,
          name: data.results[0].name/* ,
          description: 
          platforms:data.results[0].platforms.map(indice=>indice.platform.name),
          rating:data.results[0].rating,
          releaseDate:data.results[0].released */
        }
        /* res.json(games) */

        res.json(data.results[0])
        /* res.json(data.results.length) */ //20
      }
    )
        .catch((err) => console.log(err))
} catch (error) {
  console.log(error)
}

  }

)


module.exports = router;



//--------------


 const getApiInfo = async () => {
  const apiUrl = await axios.get(
      `https://api.rawg.io/api/games?key=af4d85e4080644e79b6a1699526f8186`
  );
  const apiInfo = await apiUrl.data.results.map(el => {
      return {
          id: game.id,
          name: game.name,
          description: game.slug,
          release_date: game.released,
          image: game.background_image,
          rating: game.rating,
          platforms: game.platforms?.map(p => {
              return p.platform.name
          }).join(', '),
          genres: game.genres?.map(genre => {
              return {
                  id: genre.id,
                  name: genre.name
              }
          })
      }
  })

  return apiInfo;
};

const GetDbInfo = async () => {
  return await NombreTablavideojuegos.findAll({
      include:{
          model: NombreDeTablaDeGeneros,
          atributes: ["name"],
          through:{
              attributes: [],
          },
      }
  })
}

const getAllGames = async () => {
  let apiInfo = await getApiInfo();
  const dbInfo = await GetDbInfo();
  const infoTotal =apiInfo.concat(dbInfo);
  return infoTotal
}
router.get("/recipes", async (req, res) => {
  const { name } = req.query;
      const GameTotal = await getAllGames()
  try{
      if (name) {
          let GameTitle = await GameTotal.filter((r) =>
              r.title.toLowerCase().includes(
                  name.toLowerCase())
          );
          GameTitle.length
              ? res.status(200).json(GameTitle)
              : res.status(400).send("This recipe doesn't exist");
      } else {
          res.status(200).json(GameTotal);
      }
  }catch(error){
      console.log(error)
  }
  

});


//---------

let all=responses.map(response=>
  {
    return {id:response.data.results[0].id,
      genre:response.data.results[0].genres.map(indice=>indice.name),
      image:response.data.results[0].background_image,
      name: response.data.results[0].name}
  }
  )

/*     let game={
  id:data.results[0].id,
  genre:data.results[0].genres.map(indice=>indice.name),
  image:data.results[0].background_image,
  name: data.results[0].name
} */



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



  //----------------------
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

/* results representa un solo array, resultado de un solo request  ARRAY DEa la APS GAMEI */
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





router.get('/', (req, res) => 
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
        /* res.json(responses[0].data.results) */
/*       let all=responses.map(response=>response.data.results)
    res.json(all)  */

      let all=responses.map(response=>gamesAPI(response.data.results))
    res.json(all.flat()) 


    }
    )
}

)


module.exports = router;



//-----------------------

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
 /* 
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
  */
 
/* console.log(await allGamesAPI())

      res.json(await allGamesAPI()) */


      
}

)


module.exports = router;
