import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    /*const [m, setMessage] = useState<Message>({ message: '' });
    useEffect(() => {
      fetch('/api')
        .then((r) => r.json())
        .then(setMessage);
    }, []);*/

    const [messageVisible, setMessageVisible] = useState(false);

    const [username, setUsername] = useState("");
    const [recuperoContraseña, setRecuperoContraseña] = useState(false)
    const [recuperoMessage, setRecuperoMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');

    const navigate = useNavigate();

    const resetPass = () => {
        //navigate('/home');
        setMessageVisible(true);
    };


    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value); // Actualiza username con el valor del campo de entrada
    };

    function handleRecuperarPassword() {
        if( username!=="admin"){
            setWarningMessage("El usuario ingresado no existe");
        }else{
            setWarningMessage('');
            console.log("entro")
            setRecuperoMessage("Enviamos la nueva contraseña al mail: "+ username+"@gmail.com")
            setRecuperoContraseña(true);
        }

    }


    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="logo">
                        <img src="../assets/Medicare.png" alt="Logo" />
                    </div>
                    <div className="fadeIn first">
                        <i className="bi bi-person" style={{ fontSize: '1.2rem' }}></i>
                    </div>

                    <input
                        type="text"
                        id="user"
                        className="fadeIn second"
                        name="user"
                        placeholder="Ingrese su usuario"
                        onChange={handleUsernameChange}
                        disabled={recuperoContraseña}
                    />
                    <input
                        type="button"
                        className="fadeIn third"
                        value="Recuperar"
                        onClick={handleRecuperarPassword}
                        disabled={recuperoContraseña}
                    />

                    {recuperoMessage && <div className="success">{recuperoMessage}</div>}
                    {warningMessage && <div className="warning">{warningMessage}</div>}
                    <div id="formFooter" className="fadeIn fourth">
                        <a className="underlineHover" href="./">Sing In</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
