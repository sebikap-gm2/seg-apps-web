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
  const [warningMessage, setWarningMessage] = useState('');


  const logIn = () => {

    //pegarle con el user y la pass la back.

    // Si las credenciales son incorrectas, establece el mensaje de advertencia.
    if (username === 'admin') {
      if (password === 'admin') {
        console.log("user: " + username);
        console.log("pass: " + password)
        navigate('/home');
      } else {
        setWarningMessage('Contraseña incorrecta');
      }
    } else {
      setWarningMessage('Ese usuario no existe');
    }
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
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" onClick={logIn} className="fadeIn fourth" value="Ingresar" />
          {warningMessage && <div className="warning">{warningMessage}</div>}
          <div id="formFooter">
            <a onClick={() => navigate('/forgotPassword')} className="underlineHover">¿Olvidaste tu Contraseña?</a>
            <span className="separator">|</span>
            <a onClick={() => navigate('/register')} className="underlineHover">Registrarse</a>
          </div>

        </div>
      </div>
    </>
  );
}


export default Login;
