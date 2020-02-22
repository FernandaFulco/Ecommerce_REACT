import React from "react";
import "../styles/tarea.scss";

// Ya estoy recibiendo desestructuradas a las props! No necesito
//      tener una variable para las props.
const Tarea = ({ tarea: { nombre }, borrarTarea }) => (
  <div className="tarea">
    <span>{nombre}</span>
    <input
      type="button"
      value="Eliminar"
      onClick={() => borrarTarea(nombre)}
      //   onClick siempre debe ser una función! No poner una invocación a una función!
    />
  </div>
);

export default Tarea;
