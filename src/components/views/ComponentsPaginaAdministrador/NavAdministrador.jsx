import { useState } from "react";
import { Container, Nav, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const NavAdministrador = () => {
  const [tabActiva, setTabActiva] = useState("pacientes");
  const toggleTab = (tab) => {
    setTabActiva(tab);
  };
  return (
    <Container>
      <Nav className="d-flex justify-content-center" variant="tabs" defaultActiveKey="pacientes">
        <Nav.Item>
          <Nav.Link eventKey="pacientes" onClick={() => toggleTab("pacientes")}>
            Pacientes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="turnos" onClick={() => toggleTab("turnos")}>
            Turnos
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tabActiva === "pacientes" && (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre Mascota</th>
              <th>Especie Mascota</th>
              <th>Raza Mascota</th>
              <th>Nombre Dueño</th>
              <th>Apellido Dueño</th>
              <th>Email Dueño</th>
              <th>Telefono Dueño</th>
              <th>Direccion Dueño</th>
              <th>Acciones</th>
            </tr>
          </thead>
        </Table>
      )}
      {tabActiva === "turnos" && (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre Mascota</th>
              <th>Veterinario</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Detalle de Cita</th>
              <th>Acciones</th>
            </tr>
          </thead>
        </Table>
      )}
    </Container>
  );
};

export default NavAdministrador;
