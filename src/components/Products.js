import React, { useState } from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoProductos: [],
    };
  }

  componentDidMount() {
    fetch("http://tiendaonline2020.herokuapp.com/api/product/all")
      .then(res => res.json())
      .then(res => this.setState({ listadoProductos: res }));
      console.log(this.state.listadoProductos);
  }

   filtrar(){
    let buscarInput = document.getElementById("buscar");
    this.state.listadoProductosFiltrados = this.state.listadoProductos
      .filter(function(producto) {
        if (producto.nombre.startsWith(buscarInput)) return producto;
      })
      
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1 className="col-12">Product List</h1>
            {/*<input type="text" id="buscador" placeholder="Buscar" onChange={() => filtrar(nombre)}/>*/ }
          <ul>
            {this.state.listadoProductos.map((item, i) => (
              <li key={i}>
                <h3>Product name:{item.name}</h3>
                <span>Price: {item.price}</span>
                <img src={item.photo} width="200" />
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
}

export default Products;