import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/register.scss';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';

const Register = ({ history }) => {

  const [state, setState] = useState({
    email: '',
    password: '',
    errorMsg: '',
  });

  const { email, password, errorMsg } = state;

  useEffect(() => {
    sessionStorage.removeItem("usuarioLogueado");
  }, [])

  const handleInputChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    })
  }

  // const [email, setEmail] = useState('fran@cisco.com');
  // const [password, setPassword] = useState('francisco');
  // const [errorMsg, setErrorMsg] = useState('');

  // const handleEmailChange = ({ target: { value } }) => {
  //   setEmail(value);
  // }

  // const handlePasswordChange = ({ target: { value } }) => {
  //   setPassword(value);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://tiendaonline2020.herokuapp.com/api/user/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("Éxito!", res);
        if (res.status && res.status !== 200) {
          setState({
            ...state,
            errorMsg: "El email ya se encuentra registrado."
          });
        } else {
          sessionStorage.setItem("usuarioLogueado", 1);
          history.push("/login");
        }
      })
      .catch(err => console.log("Error!", err));
  }

  return (
    <div className="register row">
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="email">Nombre de usuario: </label>
        <input type="email" name="email" value={email} className="shadow bg-white rounded" onChange={handleInputChange} required />
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" value={password} className="shadow bg-white rounded" onChange={handleInputChange} required />
        <Button variant="primary" type="submit">Registrarme</Button>
      </form>
      <div className='col-12 d-flex justify-content-center mt-2'>
        {errorMsg &&
          <h2 className="error">{errorMsg}</h2>
        }
      </div>
    </div>
  );
};

Register.propTypes = {

};

export default withRouter(Register);