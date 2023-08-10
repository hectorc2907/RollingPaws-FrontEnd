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

export const obtenerPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_pacientes + "/" + id);
    const paciente = await respuesta.json();
    return paciente;
  } catch (error) {
    console.log(error);
  }
};

export const crearPaciente = async (paciente) => {
  try {
    const respuesta = await fetch(URL_pacientes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarPaciente = async (paciente, id) => {
  try {
    const respuesta = await fetch(URL_pacientes + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_pacientes + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
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

export const obtenerTurno = async (id) => {
  try {
    const respuesta = await fetch(URL_turnos + "/" + id);
    const turno = await respuesta.json();
    return turno;
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

export const editarTurno = async (turno, id) => {
  try {
    const respuesta = await fetch(URL_turnos + "/" + id, {
      method: "PUT",
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

export const borrarTurno = async (id) => {
  try {
    const respuesta = await fetch(URL_turnos + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
