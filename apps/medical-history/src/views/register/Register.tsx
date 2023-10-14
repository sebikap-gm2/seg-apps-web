import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [mail, setMail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseñaRepetida, setContraseñaRepetida] = useState("")
    const [warningMessage, setWarningMessage] = useState('');
    const [recuperoMessage, setRecuperoMessage] = useState('');

    const navigate = useNavigate();

    const singUp = () => {
        //pegamos a la base guardamos nuevo usuario.
        if (nombre === '' || apellido === '' || mail === '' || contraseña === '' || contraseñaRepetida === '') {
            setWarningMessage("Falta completar campos");
            return;
        }

        if (contraseña !== contraseñaRepetida) {
            setWarningMessage("Las contraseñas no coinciden");
            return;
        } else {
            setWarningMessage("");
            setRecuperoMessage("Usuario creado correctamente")
            // Espera 3 segundos antes de navegar
            setTimeout(() => {
                navigate('/');
            }, 1000); // 3000 milisegundos (3 segundos)
        }


    };

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

                    <input type="text" id="name" className="fadeIn second" name="register" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)} />
                    <input type="text" id="lastname" className="fadeIn third" name="register" placeholder="Apellido" onChange={(event) => setApellido(event.target.value)} />
                    <input type="text" id="mail" className="fadeIn fourth" name="register" placeholder="Mail" onChange={(event) => setMail(event.target.value)} />
                    <input type="password" id="mail" className="fadeIn fifth" name="register" placeholder="Contraseña" onChange={(event) => setContraseña(event.target.value)} />
                    <input type="password" id="mail" className="fadeIn sixth" name="register" placeholder="Repetir Contraseña" onChange={(event) => setContraseñaRepetida(event.target.value)} />
                    {warningMessage && <div className="warning">{warningMessage}</div>}
                    <input type="submit" onClick={singUp} className="fadeIn seventh" value="Registrarme" />
                    {recuperoMessage && <div className="success">{recuperoMessage}</div>}

                    <div id="formFooter" className="fadeIn eighth">
                        <a className="underlineHover" href="./">Ingresar</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;



