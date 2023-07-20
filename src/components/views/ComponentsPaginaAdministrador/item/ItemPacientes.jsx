const ItemPacientes = ({ paciente }) => {
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
      <td>.</td>
    </tr>
  );
};

export default ItemPacientes;
