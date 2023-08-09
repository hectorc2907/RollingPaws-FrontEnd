import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404";
import Contacto from "./components/views/Contacto";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import "./App.css";
import "./fonts/ChaletLondonNineteenSixty.ttf";
import "./fonts/sofiapro-light.otf";
import "./fonts/SFUIText-Regular.otf";
import Login from "./components/views/Login.jsx";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState({
    usuarioSessionStorage,
  });
  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route
            exact
            path="/"
            element={<PaginaPrincipal></PaginaPrincipal>}
          ></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route
            exact
            path="/nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          ></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdministrador></RutasAdministrador>
              </RutasProtegidas>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
