//Primer componente React
import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Bienvenido a la colección más grande de Videjuegos</h1>
      <NavLink to="/home">
        <button>ingresar</button>
      </NavLink>
    </div>
  );
}