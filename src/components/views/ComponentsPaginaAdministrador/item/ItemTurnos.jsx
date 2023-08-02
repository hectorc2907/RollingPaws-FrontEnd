import { Link } from "react-router-dom";

const ItemTurnos = ({ turno, setTurnos }) => {
  return (
    <tr>
      <td>{turno.nombreMascota}</td>
      <td>{turno.nombreVeterinario}</td>
      <td>{turno.fechaConsulta}</td>
      <td>{turno.horaConsulta}</td>
      <td>{turno.detalleConsulta}</td>
      <td>
        <Link
          className="btn btn-warning"
          to={"/administrador/editar-turno/" + turno._id}
        >
          Editar
        </Link>
      </td>
    </tr>
  );
};

export default ItemTurnos;
