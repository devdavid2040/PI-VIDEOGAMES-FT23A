/* import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
    </div>
  );
}

export default App;
 */

import './App.css';
//ACA VAMOS A DEFINIR EN QUE RUTA DEL FRONT SE MUESTRA CADA COMPONENTE.


import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import VideogameDetail from "./components/VideogameDetail";
import VideogameForm from "./components/VideogameForm";
import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/home/:idVideogame" component={VideogameDetail} />
        <Route path="/home" component={Home} />
        <Route path="/videogame" component={VideogameForm} />
        <Route path="/" component={Landing} /> 
        </Switch>
      </div>
      {console.log("entraaa")}
    </BrowserRouter>
  );
}

export default App;