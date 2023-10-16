import React, { useEffect, useState } from 'react';
import { Message } from '@seg-apps-web/api-interfaces';
import { HTTP } from '../services';

const http = new HTTP();

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  const handleClick = async () => {
    const res = await http.post('http://localhost:3333/login', {
      username: 'admin',
      password: 'admin123',
    });
    setMessage(res);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to medical-history!</h1>
      </div>
      <button onClick={handleClick}>Login</button>
      <div>{m.message}</div>
    </>
  );
};
