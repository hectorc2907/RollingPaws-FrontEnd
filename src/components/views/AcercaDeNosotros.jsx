import React from "react";
import perfilJoaquin from "./../../assets/about_us/joaquin.jpg"
import perfilHector from "./../../assets/about_us/hector.jpg"
import perfilGerardo from "./../../assets/about_us/gerardo.jpg"
import { Card, Col, Container, Row } from "react-bootstrap";

const AcercaDeNosotros = () => {
  return (
    <Container>
      <h1 className="my-3">Acerca de Nosotros</h1>
      <p>En Rolling Paws, estamos comprometidos con la salud y la felicidad de tus adorables compañeros de vida.<br/>
      Nuestra pasión por los animales nos impulsa a brindar atención excepcional y compasiva a cada paciente peludo que camina por nuestras puertas.</p>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card className="px-0" data-aos="fade-up">
            <Card.Img variant="top" src={perfilJoaquin} className="img-fluid"/>
            <Card.Body>
              <Card.Title>Joaquín G. Andrada</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Footer>
                <a href="https://github.com/GuillermoA231" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github m-2 fs-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-guillermo-andrada-9b892121a/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-linkedin m-2 fs-2"></i>
                </a>
                <a href="mailto:andradajoaquin302@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-envelope-fill m-2 fs-2"></i>
                </a>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="px-0" data-aos="fade-up" data-aos-delay="500">
            <Card.Img variant="top" src={perfilHector} className="img-fluid"/>
            <Card.Body>
              <Card.Title>Hector Clessi</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Footer>
                <a href="https://github.com/hectorc2907/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github m-2 fs-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/hector-clessi/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-linkedin m-2 fs-2"></i>
                </a>
                <a href="mailto:hectorc2907@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-envelope-fill m-2 fs-2"></i>
                </a>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="px-0" data-aos="fade-up" data-aos-delay="1000">
            <Card.Img variant="top" src={perfilGerardo} className="img-fluid"/>
            <Card.Body>
              <Card.Title>Gerardo Mansilla</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Footer>
                <a href="https://github.com/pequege" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github m-2 fs-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/gerardo-mansilla-674b76a7/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-linkedin m-2 fs-2"></i>
                </a>
                <a href="mailto:gerardoemansilla@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-envelope-fill m-2 fs-2"></i>
                </a>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AcercaDeNosotros;
