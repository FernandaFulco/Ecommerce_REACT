import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import ManejoTareas from "./components/ManejoTareas";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import Carrito from './components/Carrito';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <p>Tienda Online</p>
        </header>
        <body>
          
        <BrowserRouter>
          <Switch>
            <Route path="/tareas" component={ManejoTareas} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/carrito" component={Carrito} exact />
            <Route path="/home" component={Home} exact />
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
