import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, ListGroup,Card } from 'react-bootstrap';

class Carrito extends React.Component {



    subTotal = (carrito) => {

        debugger
        let total = 0;
        carrito.map((obj) => total += obj.cantidad * obj.price);
        return total;
    }

    cantidadItems = (carrito) => {
        let cantidad = 0;
        carrito.map((obj) => cantidad += obj.cantidad);
        return cantidad;
    }



    render() {
        console.log(this.props);
        const { borrarProducto } = (this.props)
        debugger
        let subTotal = this.subTotal(this.props.carrito);
        let total = subTotal * 1.22;
        let iva = subTotal * 0.22;
        let cantidad = 0;
        let mostrarProductos = (this.props.carrito.map(producto =>
            <tr key={producto._id}>
                <td><img src={producto.photo} style={{ width: '5rem', height: '5rem' }} /> </td>
                <td>{producto.name}</td>

                <td>{producto.cantidad}</td>
                <td className="text-right">$ {producto.price}</td>
                <td className="text-right"><button className="btn btn-sm btn-primary" onClick={() => borrarProducto(producto)} >Eliminar<i className="fa fa-trash"></i> </button> </td>
            </tr>
        ));
        console.log('Este es el id del producto:' + this.props);

        return (

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Producto</th>

                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mostrarProductos}
                        <tr>
                            <td></td>
                            <td>Cantidad productos</td>
                            <td>{cantidad}</td>
                            <td>SubTotal</td>
                            <td className="text-right">{subTotal}$</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>iva</td>
                            <td className="text-right">{iva}$</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>{total}$</strong></td>
                        </tr>
                    </tbody>
                </table>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Carrito</ListGroup.Item>
                        <ListGroup.Item>Subtotal:{subTotal}</ListGroup.Item>
                        <ListGroup.Item>IVA:{iva}</ListGroup.Item>
                        <ListGroup.Item>Total:{total}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }


}
export default withRouter(Carrito);