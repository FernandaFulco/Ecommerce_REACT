import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tarea from './Tarea';

class ManejoTareas extends Component {

  componentWillMount(){
    debugger;
    if(sessionStorage.getItem("usuarioLogueado") !== "1")
    {
      this.props.history.push("/login");
    }
  }

  // No necesito poner el constuctor con props, porque es innecesario.
  state = {
    nombreTarea: '',
    tareas: [],
  };

  // En lugar de recibir al evento e, lo desestructuro para quedarme con e.target.value
  changeNombreTarea = ({ target: { value } }) => {
    // this.setState es asíncrono. Recibe un json y actualiza el valor
    //    de las variables que tiene como claves
    this.setState({ nombreTarea: value });
  };

  agregarTarea = () => {
    // Recordar siempre desestructurar tanto al state como a las props
    //    al comienzo de los métodos
    const { nombreTarea, tareas } = this.state;
    // entrará si nombre tarea no es undefined, false, null, 0, "", "0"...
    if (nombreTarea) {
      const nuevaTarea = { nombre: nombreTarea };
      // setState puede recibir más de una pareja clave-valor!
      this.setState({ nombreTarea: '', tareas: [...tareas, nuevaTarea] });
    }
  };

  borrarTarea = nombre => {
    const { tareas } = this.state;
    // const tareasFiltradas = tareas.filter(({nombre: nombreTarea}) => nombreTarea !== nombre);
    const tareasFiltradas = tareas.filter(tarea => tarea.nombre !== nombre);
    this.setState({ tareas: tareasFiltradas });
  };

  render() {
    const { nombreTarea, tareas } = this.state;
    // Recordar que sobre los input de tipo texto, debemos tener una variable
    //    en el estado y un onChange para cada uno de ellos!

    return (
      <>
        <div className="agregarTarea">
          <input
            className="agregarTarea-texto"
            type="text"
            placeholder="Ingrese la descripción de la tarea..."
            value={nombreTarea}
            onChange={this.changeNombreTarea}
          />
          <input
            className="agregarTarea-boton"
            type="button"
            value="Agregar Tarea"
            onClick={this.agregarTarea}
          />
        </div>
        <div className="grupoTareas">
          {/* Recordar agregar un key a cada elemento raíz del
                map. Tip: usar index! Si el elemento ya tiene un id,
                usar el propio id del elemento
          */}
          {tareas.length === 0 ? (
            <p>No hay ninguna tarea. Arrancá pa' las 8hs.</p>
          ) : (
            tareas.map((tarea, index) => (
              <Tarea key={index} tarea={tarea} borrarTarea={this.borrarTarea} />
            ))
          )}
        </div>
      </>
    );
  }
}

export default withRouter(ManejoTareas);
