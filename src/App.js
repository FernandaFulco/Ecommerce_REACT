import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ManejoTareas from "./components/ManejoTareas";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import PageNotFound from './components/PageNotFound';
import './App.scss';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Tienda Online</p>
        </header>
        
        <Switch>
          <Route path="/home" component={Home} exact/>
          <Route path="/tareas" component={ManejoTareas} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/products" component={Products} exact/>
          {/*<Route component={PageNotFound}/>*/}
          
        </Switch>
      </div>
    );
  }
}

export default App;
