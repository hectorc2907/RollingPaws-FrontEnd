import { Navbar, Container, Row, Col } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/rolling-paws-logo.svg'


const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4 mt-4 text-center justify-content-around">
        <Container>
        <Row>
          <Col xs={4} md={4}>
            <img src={logo} className="img-fluid text-light img-logo" ></img>
          </Col>
          <Col xs={4} md={4}>
            <ul className="list-unstyled">
              <NavLink className={"nav-item nav-link"} to={"/login"}><li>Login</li></NavLink>
              <NavLink className={"nav-item nav-link"} to={"/*"}><li>Turnos</li></NavLink>
              <NavLink className={"nav-item nav-link"} to={"/contacto"}><li>Contacto</li></NavLink>
              <NavLink className={"nav-item nav-link"} to={"/nosotros"}><li>Acerca de Nosotros</li></NavLink>
              <NavLink className={"nav-item nav-link"} to={"/*"}><li>Términos y condiciones</li></NavLink>
            </ul>
          </Col>
          <Col xs={4} md={4}>
            <h5>Google Play</h5>
            <h5>Apple Store</h5>
          </Col>
        </Row>
      </Container>
        <p>&copy; 2023 Rolling Paws. Todos los derechos reservados</p>
      </footer>
    );
  };
  
  export default Footer;
  