import { useEffect, useState } from "react";
import { Container, Nav, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  obtenerListaPacientes,
  obtenerListaTurnos,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemPacientes from "./item/ItemPacientes";
import ItemTurnos from "./item/ItemTurnos";

const NavAdministrador = () => {
  const [pacientes, setPacientes] = useState([]);
  const [turnos, setTurnos] = useState([]);
  useEffect(() => {
    obtenerListaPacientes().then((respuesta) => {
      if (respuesta) {
        setPacientes(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar esta operacion en unos minutos",
          "error"
        );
      }
    });
    obtenerListaTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar esta operacion en unos minutos",
          "error"
        );
      }
    });
  }, []);
  const [tabActiva, setTabActiva] = useState("pacientes");
  const toggleTab = (tab) => {
    setTabActiva(tab);
  };

  return (
    <Container>
      <Nav
        className="d-flex justify-content-center"
        variant="tabs"
        defaultActiveKey="pacientes"
      >
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
          <tbody>
            {pacientes.map((paciente) => (
              <ItemPacientes
                key={paciente._id}
                paciente={paciente}
              ></ItemPacientes>
            ))}
          </tbody>
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
          <tbody>
            {turnos.map((turno)=>(
              <ItemTurnos key={turno._id} turno={turno}></ItemTurnos>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default NavAdministrador;
