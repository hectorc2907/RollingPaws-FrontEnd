import "bootstrap/dist/css/bootstrap.min.css";
import imgInicio from "./../../../assets/inicio.png"
import { Col, Row } from "react-bootstrap";

const Logo = () => {
  return (
    <section className="container">
      <article className="">
        <h6 className="text-warning">Bienvenido a</h6>
        <h1 className="text-info">Rolling Paws</h1>
      </article>
      <Row>
        <Col md={6}>
          <img className="img-fluid" src={imgInicio} alt="" />
        </Col>
        <Col md={6} className="my-auto">
          <h2><strong>Todo</strong> lo que necesitas <strong>para Firulais</strong>, en un solo lugar.</h2>
          <p>
            ¡El bienestar de tu querida mascota es nuestra prioridad! <br/>
            Te ofrecemos un servicio integral y dedicado para cuidar a tus compañeros,
            consultas médicas hasta productos de alta calidad,
            nuestro equipo de expertos está listo para atender todas las necesidades de tus mascotas.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Logo;
