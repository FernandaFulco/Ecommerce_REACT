import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Products from './Products';
import Carrito from "./Carrito";
import Login from './Login';

class Home extends React.Component {

  render() {

    return (
      <div>
        <Products />
      
      </div>
    );
  }
}

export default withRouter(Home);



