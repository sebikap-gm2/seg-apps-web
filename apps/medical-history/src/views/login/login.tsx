import React, { useEffect, useState } from 'react';
import './login-styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  /*const [m, setMessage] = useState<Message>({ message: '' });
  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);*/

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const logIn = () => {
    console.log("user: " + username);
    console.log("pass: " + password)
    navigate('/home');
  };


  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value); // Actualiza username con el valor del campo de entrada
  };


  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value); // Actualiza username con el valor del campo de entrada
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <div className="logo">
            <img src="../assets/Medicare.png" alt="Logo" />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Usuario"
              value={username} // Enlaza el valor del campo de entrada a la variable username
              onChange={handleUsernameChange} // Establece el controlador de eventos onChange
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Contraseña"
              value={password} // Enlaza el valor del campo de entrada a la variable username
              onChange={handlePasswordChange} // Establece el controlador de eventos onChange
            />
            <input type="submit" onClick={logIn} className="fadeIn fourth" value="Ingresar" />
          </form>
          <div id="formFooter">
            <a
              onClick={() => navigate('/forgotPassword')}
              className="underlineHover"
            >¿Olvidaste tu Contraseña?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
