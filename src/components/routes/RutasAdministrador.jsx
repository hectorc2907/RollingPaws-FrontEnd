import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearPaciente from "../views/ComponentsPaginaAdministrador/item/CrearPaciente";
import EditarPaciente from "../views/ComponentsPaginaAdministrador/item/EditarPaciente";
import CrearTurno from "../views/ComponentsPaginaAdministrador/item/CrearTurno";
import EditarTurno from "../views/ComponentsPaginaAdministrador/item/EditarTurno";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/crear-paciente"
          element={<CrearPaciente></CrearPaciente>}
        ></Route>
        <Route
          exact
          path="/editar-paciente"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
        <Route
          exact
          path="/crear-turno"
          element={<CrearTurno></CrearTurno>}
        ></Route>
        <Route
          exact
          path="/editar-turno"
          element={<EditarTurno></EditarTurno>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
