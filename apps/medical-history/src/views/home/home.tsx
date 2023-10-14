import React from 'react';
import './home-styles.css';
import Table from 'react-bootstrap/Table';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="../assets/Medicare-sin-fondo.png"
          alt="Logo"
          className="logo"
        />
        <a href="/profile" className="profile">
          Perfil
        </a>
      </nav>

      <div className="content">
        <div className="sidebar">
          <a href="/opcion1">Inicio</a>
          <a href="/opcion2">Mi Cuenta</a>
          <a href="/opcion3">Cobertura</a>
        </div>
        <Table responsive className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Tipo Atencion</th>
              <th>Profesional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>14/02/23</td>
              <td>Consulta Medica</td>
              <td>Dr Cairo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>14/02/23</td>
              <td>Consulta Medica</td>
              <td>Dr Cairo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>14/02/23</td>
              <td>Consulta Medica</td>
              <td>Dr Cairo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
