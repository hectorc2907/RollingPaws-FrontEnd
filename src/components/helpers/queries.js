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

export const crearTurno = async (turno) => {
  try {
    const respuesta = await fetch(URL_turnos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
