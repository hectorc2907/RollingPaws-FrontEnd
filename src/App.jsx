import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import Administrador from "./components/views/Administrador";
import CrearPaciente from "./components/views/ComponentsPaginaAdministrador/item/CrearPaciente";
import CrearTurno from "./components/views/ComponentsPaginaAdministrador/item/CrearTurno";
import EditarTurno from "./components/views/ComponentsPaginaAdministrador/item/EditarTurno";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<PaginaPrincipal></PaginaPrincipal>}
          ></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/administrador/crear-paciente"
            element={<CrearPaciente></CrearPaciente>}
          ></Route>
          <Route
            exact
            path="/administrador/crear-turno"
            element={<CrearTurno></CrearTurno>}
          ></Route>
          <Route
            exact
            path="/administrador/editar-turno/:id"
            element={<EditarTurno></EditarTurno>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
