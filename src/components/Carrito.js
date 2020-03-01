import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";


class Carrito extends React.Component {
    constructor(props){

        super(props)
        this.state = {
            subTotal: 0,
            iva: 0,
            total: 0,
            totalItems: 0,
        }

    }


    agregarProducto = (item) => {
        const objeto = item;
        console.log('Agregar' + objeto);
        alert(item.name)
    
        if (sessionStorage.getItem("usuarioLogueado") !== "1") {
          this.props.history.push("/login");
        } else {
    
    
          if (this.objeto !== 'undefined') {



            console.log(objeto);
            console.log('holaa soy fer');
            /*this.state.productoParaAgregar = this.state.listadoProductos.filter(item => item._id === item)
            this.state.listadoCompras.push(this.state.productosParaAgregar)*/
            //const producto = this.listadoCompras.push(objeto);
            console.log(this.state.listadoCompras);
    
          }
    
        }
      }


    render() {

        return (
            <div>
                <p>Carrito de compras</p>
                <p>Subtotal:{}</p>
                <p>IVA:{}</p>
                <p>Total:{}</p>
                <p>Cantidad de items:{}</p>


            </div>
        );
    }


}
export default withRouter(Carrito);