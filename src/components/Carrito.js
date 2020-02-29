import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";

class Carrito extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subTotal: 0,
            iva: 0,
            total: 0,
            totalItems: 0,
            ProductosDelCarrito: [],
        };
    }


    render() {

        return (
            <div>
                <p>Carrito de compras</p>
                <p>Subtotal:</p>
                <p>IVA:</p>
                <p>Total:</p>
                <p>Cantidad de items:</p>

                
            </div>
        );
    }


}
export default withRouter(Carrito);