import React, { useEffect, useState } from 'react';
import { Message } from '@seg-apps-web/api-interfaces';
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

  const logIn = () => {
    navigate('/home');
  };

  return (
    <>
      <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="submit" onClick={logIn} className="fadeIn fourth" value="Log In"/>
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
