import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import Administrador from "./components/views/Administrador";

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
          <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
