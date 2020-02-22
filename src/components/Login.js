import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/login.scss';

const Login = ({ history }) => {

  const [state, setState] = useState({
    email: '',
    password: '',
    errorMsg:'',
  });

  const { email, password, errorMsg } = state;

  useEffect(() => {
    sessionStorage.removeItem("usuarioLogueado");
  },[])

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

    fetch('http://tiendaonline2020.herokuapp.com/api/user/login',{
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
          console.log("Éxito!",res);
          if(res.status && res.status !== 200)
          {
            setState({
              ...state,
              errorMsg: "No existe un usuario con dicha contraseña. Intente nuevamente."
            });
          } else {
            sessionStorage.setItem("usuarioLogueado",1);
            history.push("/tareas");
          }
        })
        .catch(err => console.log("Error!",err));
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Nombre de usuario: </label>
        <input type="email" name="email" value={email} onChange={handleInputChange} required/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" value={password} onChange={handleInputChange} required/>
        <input type="submit" value="Iniciar Sesión"/>
        { errorMsg &&
          <h2 className="error">{errorMsg}</h2>
        }
      </form>
    </div>
  );
};

Login.propTypes = {

};

export default withRouter(Login);
