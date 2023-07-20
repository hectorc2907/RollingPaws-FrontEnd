import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/common/Menu.jsx";
import Footer from "../components/common/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
    </BrowserRouter>
  )
}

export default App
