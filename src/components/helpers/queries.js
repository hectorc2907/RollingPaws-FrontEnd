const URL_pacientes = import.meta.env.VITE_API_PACIENTES;
const URL_turnos = import.meta.env.VITE_API_TURNOS;

export const obtenerListaPacientes = async () => {
  try {
    const respuesta = await fetch(URL_pacientes);
    const listaPacientes = await respuesta.json();
    return listaPacientes;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaTurnos = async () => {
  try {
    const respuesta = await fetch(URL_turnos);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};
