import { Navbar, Container, Row, Col } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';


const Footer = () => {
    return (
      <footer className="bg-dark text-light mt-4 py-4 text-center justify-content-around">
        <Container>
        <Row>
          <Col xs={4} md={4}>
            <h5>RollingPaws</h5>
          </Col>
          <Col xs={4} md={4}>
            <ul className="list-unstyled">
              <li>Login</li>
              <li>Turnos</li>
              <li>Contacto</li>
              <li>Acerca de Nosotros</li>
              <li>Términos y condiciones</li>
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
  