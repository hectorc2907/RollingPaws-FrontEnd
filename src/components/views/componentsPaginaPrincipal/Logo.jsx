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
          <h2>Everything you need in one spot for Spot.</h2>
          <p className="fs-3">
            We are a full-service, general practice vet clinic that offers you a variety of options to ensure your best friends always feel their best.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Logo;
