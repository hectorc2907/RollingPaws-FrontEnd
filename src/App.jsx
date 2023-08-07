import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import Administrador from "./components/views/Administrador";
import CrearPaciente from "./components/views/ComponentsPaginaAdministrador/item/CrearPaciente";
import CrearTurno from "./components/views/ComponentsPaginaAdministrador/item/CrearTurno";
import EditarTurno from "./components/views/ComponentsPaginaAdministrador/item/EditarTurno";
import EditarPaciente from "./components/views/ComponentsPaginaAdministrador/item/EditarPaciente";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/Error404";
import Contacto from "./components/Contacto";
import AcercaDeNosotros from "./components/AcercaDeNosotros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route
            exact
            path="/"
            element={<PaginaPrincipal></PaginaPrincipal>}
          ></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route
            exact
            path="/nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
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
            path="/administrador/editar-paciente/:id"
            element={<EditarPaciente></EditarPaciente>}
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
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
