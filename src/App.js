import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import ManejoTareas from "./components/ManejoTareas";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import Carrito from './components/Carrito';
import PageNotFound from './components/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaChrome, FaShoppingCart } from 'react-icons/fa';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, Card, InputGroup } from 'react-bootstrap';

class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <span><FaShoppingCart className='FaShoppingCart' /></span>
          <p>Tienda Online</p>
          <div className=" row ml-4">
            <Button variant="primary" href='./register' className='m-2'>Registrarme</Button>
            <Button variant="primary" href='./login' className='m-2 '>Iniciar Sesión </Button>
          </div>
        </header>
        <body>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/carrito" component={Carrito} exact />
              {/*<Route component={PageNotFound}/>*/}
              <Route path="/" component={Products} exact />
            </Switch>
          </BrowserRouter>
        </body>
      </div>
    );
  }
}

export default App;
