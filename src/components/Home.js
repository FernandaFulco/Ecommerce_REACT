import React, { useState } from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoProductos: [],
      search:""
    };
  }
  


  componentDidMount() {
    fetch("http://tiendaonline2020.herokuapp.com/api/product/all")
      .then(res => res.json())
      .then(res => this.setState({ listadoProductos: res }));
      console.log(this.state.listadoProductos)
    }

     handleChange= (e, search) => {
      
      this.setState({
        [search]: e.target.value
      
    })};

     /*handleChange(event,search) {


      this.setState({
        [search]:event.target.value
      })


    }*/
    //      debugger;
      //let seleccion = this.state.listadoProductos.filter((prod) => prod.includes(e.target.value));
      //console.log(seleccion);
    
 

  render() {

    console.log(this.state.search);
  

    return (
      <div>
        <div className="row">
     <input type='text' placeholder='Buscar productos' value={this.state.search} name="search" required onChange={(e) => { this.handleChange(e, `search`) }} />


          <ul>
            {this.state.listadoProductos.map((item, i) => (
              <li key={i}>
                <h3>Product name:{item.name}</h3>
                <span>Price: {item.price}</span>
                <img src={item.photo} width="200" />
                <input type="button" value="Comprar" />
              </li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
}

export default withRouter (Home);



