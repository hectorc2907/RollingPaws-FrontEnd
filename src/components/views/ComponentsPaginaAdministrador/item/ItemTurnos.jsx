import { Link } from "react-router-dom";
import { borrarTurno, obtenerListaTurnos } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const ItemTurnos = ({ turno, setTurnos }) => {
  const eliminarTurno = () => {
    borrarTurno(turno._id).then((respuesta) => {
      if (respuesta.status === 200) {
        obtenerListaTurnos().then((respuesta) => {
          if (respuesta) {
            setTurnos(respuesta);
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
          `El turno de ${turno.nombreMascota} fue eliminado`,
          "error"
        );
      } else {
        Swal.fire(
          "Ocurrio un Error",
          `El turno de ${turno.nombreMascota} NO fue eliminado`,
          "success"
        );
      }
    });
  };

  return (
    <tr>
      <td>{turno.nombreMascota}</td>
      <td>{turno.nombreVeterinario}</td>
      <td>{turno.fechaConsulta}</td>
      <td>{turno.horaConsulta}</td>
      <td>{turno.detalleConsulta}</td>
      <td className="d-flex justify-content-around">
        <Link
          className="btn btn-warning"
          to={"/administrador/editar-turno/" + turno._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={eliminarTurno}>Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemTurnos;
