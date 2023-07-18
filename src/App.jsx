import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/views/PaginaPrincipal"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
