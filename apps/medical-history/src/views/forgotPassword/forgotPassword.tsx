import React, { useEffect, useState } from 'react';
import './forgotPassword-styles.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="logo">
                        <img src="../assets/Medicare.png" alt="Logo" />
                    </div>

                    <form>
                      </form>
                    <div id="formFooter">
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
