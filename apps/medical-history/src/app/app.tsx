import React, { useEffect, useState } from 'react';
import { Message } from '@seg-apps-web/api-interfaces';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../views/login/login';
import Home from '../views/home/home';
import Profile from '../views/profile/profile';
import ForgotPassword from '../views/forgotPassword/forgotPassword';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        {/*<Route element={<NotFound/>} />*/}
      </Routes>
    </Router>
  );
};
