import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  borrarPaciente,
  obtenerListaPacientes,
} from "../../../helpers/queries";

const ItemPacientes = ({ paciente, setPacientes }) => {
  const eliminarPaciente = () => {
    borrarPaciente(paciente._id).then((respuesta) => {
      if (respuesta.status === 200) {
        obtenerListaPacientes().then((respuesta) => {
          if (respuesta) {
            setPacientes(respuesta);
          } else {
            Swal.fire(
              "Error",
              "Intente realizar la operacion en unos minutos",
              "error"
            );
          }
        });
        Swal.fire(
          "Eliminado",
          `El Paciente ${paciente.nombreMascota} fue eliminado`,
          "success"
        );
      } else {
        Swal.fire(
          "Ocurrio un Error",
          `El paciente ${paciente.nombreMascota} NO fue eliminado`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{paciente.nombreMascota}</td>
      <td>{paciente.especieMascota}</td>
      <td>{paciente.razaMascota}</td>
      <td>{paciente.nombreDuenio}</td>
      <td>{paciente.apellidoDuenio}</td>
      <td>{paciente.emailDuenio}</td>
      <td>{paciente.telefonoDuenio}</td>
      <td>{paciente.direccionDuenio}</td>
      <td className="d-flex justify-content-around">
        <Link
          className="btn btn-warning"
          to={"/administrador/editar-paciente/" + paciente._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={eliminarPaciente}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPacientes;
