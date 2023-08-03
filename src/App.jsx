import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
//  Estilo
import "./App.css";
//  Fuentes
import "./fonts/ChaletLondonNineteenSixty.ttf";
import "./fonts/sofiapro-light.otf";
import "./fonts/SFUIText-Regular.otf";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
