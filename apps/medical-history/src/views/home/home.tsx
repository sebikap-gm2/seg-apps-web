import React, { useState } from 'react';
import './home-styles.css';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'; // Importa el componente Modal de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';



const Home = () => {
  const [observacion, setObservacion] = useState(''); // Nuevo estado para la observación
  const [itemSeleccionado, setItemSeleccionado] = useState<number | null>(null); // Especifica el tipo number
  const [showModal, setShowModal] = useState(false);

  // Función para mostrar el modal al hacer clic en el botón
  const handleButtonClick = (id: number) => { // Especifica el tipo number
    setItemSeleccionado(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    //ir a la base y guardar la observacion.
    //Recargar la tabla.
    setObservacion("");
    setShowModal(false);
  };

  return (

    <div style={{ backgroundColor: "#f6f6f6", height: "630px" }}>
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
        <div style={{ marginLeft: '12%' }}>
          <p className="title">
            Historial de Atenciones para:<span style={{ fontWeight: "bold" }}> Saturni, Agustin </span>
          </p>
          <p className="paragraph" >
            Tu opinión nos ayuda a mejorar la calidad de nuestro servicio. ¡Contanos tu experiencia con las atenciones recibidas en el último año!
          </p>
          <Table responsive className="custom-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo Atencion</th>
                <th>Profesional</th>
                <th>Observaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14/02/23</td>
                <td>Consulta Medica</td>
                <td>Dr Jorgito</td>
                <td>
                  <span>SELECT * FROM USUARIOS
                  </span>
                  <i onClick={() => handleButtonClick(2)} className="bi bi-pencil-square"></i>
                </td>
              </tr>
              <tr>
                <td>16/02/23</td>
                <td>Consulta Medica</td>
                <td>Dr Cairo</td>
                <td>
                  <div className="observation-container">
                    <span>item.observacion</span>
                    <i onClick={() => handleButtonClick(2)} className="bi bi-pencil-square"></i>
                  </div>
                </td>
              </tr>
              <tr>

                <td>24/06/23</td>
                <td>Consulta Medica</td>
                <td>Dr Cairo</td>
                <td>
                  <div className="observation-container">
                    <span>item.observacion</span>
                    <i onClick={() => handleButtonClick(2)} className="bi bi-pencil-square"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Observación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                value={observacion}
                onChange={(e) => setObservacion(e.target.value)}
                placeholder="Escribe tu observación aquí"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
