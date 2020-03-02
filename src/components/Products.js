import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import Home from './Home';
import Carrito from './Carrito';


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoProductos: [],
      listadoProductosFiltrados: [],
      search: "",
      carro: [],
    };
  }





  componentDidMount() {//una sola vez se ejecuta después que la salida del componente ha sido renderizada en el DOM.
    fetch("http://tiendaonline2020.herokuapp.com/api/product/all")
      .then(res => res.json())
      .then(res => this.setState({ listadoProductos: res }));//Utilizará this.setState() para programar actualizaciones al estado local del componente.
    console.log(this.state.listadoProductos)
  }

  handleChange = (e, inputName) => { //search:es el name del input
    const { listadoProductos } = this.state;
    this.setState({
      [inputName]: e.target.value//convierte inputName a una prop del objeto state y le asigna el valor del input
    },
      () => {
        const productosFiltrados = listadoProductos.filter(producto => producto.name.toLowerCase().includes(this.state.search.toLowerCase()))
        this.setState({ listadoProductosFiltrados: productosFiltrados });
      }
    )
  };



  comprar = (item,  cantidad) => {
    console.log(item);
debugger;

    if (sessionStorage.getItem("usuarioLogueado") !== "1") {
      this.props.history.push("/login");
    } else {
      let nuevoCarrito = this.state.carro
      let index=-1;

         index = nuevoCarrito.findIndex(carrito => carrito._id === item._id)
  
      debugger;
      
      const obj = {...item,cantidad};
      if(index >= 0){
        nuevoCarrito[index].cantidad += cantidad;
      }else{
        nuevoCarrito.push(obj)
      }

      this.setState({
        carro: nuevoCarrito
      })
      
     
    }

  }







  render() {
    console.log(this.state.carro);
    const productosAMostrar = this.state.search.length < 1 ? this.state.listadoProductos : this.state.listadoProductosFiltrados;


    return (
      <div>
        <div className="row">
          <input type='text' placeholder='Buscar productos' value={this.state.search} name="search" required onChange={(e) => { this.handleChange(e, `search`) }} />
          <div>
            {productosAMostrar.map((item, i) => (
              <div key={item._id}>
                <div className='Producto'>
                  <h3>Product name:{item.name}</h3>
                  <span>Price: {item.price}</span>
                  <img src={item.photo} width="200" />
                  <button onClick={() => this.comprar(item, 1)}>Comprar</button>{/**this será undefined cuando se llame la función. */}
                  {/**<button onClick={this.agregarProducto(item)}>Comprar</button> */}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        <Carrito carrito={this.state.carro} ></Carrito>
      </div>
    );
  }
}

export default withRouter(Products);

