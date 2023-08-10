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
import { Link } from "react-router-dom";
import Pagination from "./item/Pagination";

const NavAdministrador = () => {
  const [pacientes, setPacientes] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    tabActiva === "pacientes"
      ? pacientes.slice(indexOfFirstItem, indexOfLastItem)
      : turnos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <div className="my-4 d-flex justify-content-around">
        <Link className="btn btn-success" to="/administrador/crear-paciente">
          Agregar Paciente
        </Link>
        <Link className="btn btn-success" to="/administrador/crear-turno">
          Agregar Turno
        </Link>
      </div>
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
        <div>
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
              {pacientes
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((paciente) => (
                  <ItemPacientes
                    key={paciente._id}
                    paciente={paciente}
                    setPacientes={setPacientes}
                  ></ItemPacientes>
                ))}
            </tbody>
          </Table>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={pacientes.length}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      )}
      {tabActiva === "turnos" && (
        <div>
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
              {turnos
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((turno) => (
                  <ItemTurnos key={turno._id} turno={turno} setTurnos={setTurnos}></ItemTurnos>
                ))}
            </tbody>
          </Table>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={turnos.length}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      )}
    </Container>
  );
};

export default NavAdministrador;
