const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;



/*
https://stackoverflow.com/questions/68623120/axios-npm-not-fetching-data-express-js
 
const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=samalkha&appid=91645b79f9eac8808153c90472150f2d"

const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  axios
    .get(URL)
    .then((response) => response.data)
    .then((data) => res.json(data.main.temp))
    .catch((err) => console.log(err))
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
 */
