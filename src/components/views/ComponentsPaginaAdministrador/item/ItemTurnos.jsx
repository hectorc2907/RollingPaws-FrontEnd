const ItemTurnos = ({turno}) => {
    return (
        <tr>
            <td>{turno.nombreMascota}</td>
            <td>{turno.nombreVeterinario}</td>
            <td>{turno.fechaConsulta}</td>
            <td>{turno.horaConsulta}</td>
            <td>{turno.detalleConsulta}</td>
            <td>.</td>
        </tr>
    );
};

export default ItemTurnos;