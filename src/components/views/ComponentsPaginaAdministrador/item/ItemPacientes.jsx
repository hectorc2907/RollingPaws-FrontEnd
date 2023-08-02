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
      <td className="truncate-cell">{paciente.nombreMascota}</td>
      <td className="truncate-cell">{paciente.especieMascota}</td>
      <td className="truncate-cell">{paciente.razaMascota}</td>
      <td className="truncate-cell">{paciente.nombreDuenio}</td>
      <td className="truncate-cell">{paciente.apellidoDuenio}</td>
      <td className="truncate-cell">{paciente.emailDuenio}</td>
      <td className="truncate-cell">{paciente.telefonoDuenio}</td>
      <td className="truncate-cell">{paciente.direccionDuenio}</td>
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
