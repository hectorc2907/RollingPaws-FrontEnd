import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./components/Login.jsx";
import { useState } from "react";
import Menu from './components/common/Menu.jsx'

function App() {

  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);
  return (
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
      <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
