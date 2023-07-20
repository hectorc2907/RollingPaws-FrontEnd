const URL_pacientes = import.meta.env.VITE_API_PACIENTES;

export const obtenerListaPacientes = async () => {
  try {
    const respuesta = await fetch(URL_pacientes);
    const listaPacientes = await respuesta.json();
    return listaPacientes;
  } catch (error) {
    console.log(error);
  }
};
