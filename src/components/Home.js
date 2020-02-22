import React, { useState } from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoProductos: [],
    };
  }
  
  /*handleInputChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    })
  }

   handleSubmit = (event) => {
    event.preventDefault();
   }
 */

  componentDidMount() {
    fetch("http://tiendaonline2020.herokuapp.com/api/product/all")
      .then(res => res.json())
      .then(res => this.setState({ listadoProductos: res }));
      console.log(this.state.listadoProductos)
    }
  
    
 

  render() {

    
    function handleChange(e) {
      let seleccion = this.state.listadoProductos.filter((prod) => prod.includes(e.target.value));
      console.log(seleccion);
    }
    return (
      <div>
        <div className="row">
        <input type='text' placeholder='Buscar productos' onChange={handleChange} />
        <input type='button' value="Ingresar" onChange={handleChange} />

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

export default Home;