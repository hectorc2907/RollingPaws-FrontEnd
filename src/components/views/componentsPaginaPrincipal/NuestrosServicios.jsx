import { Col, Card, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NuestrosServicios = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Servicios</h2>
      <Row>
        <Col md={6} lg={4} xl={3} xxl={3} data-aos="fade-up">
          <Card className="card-servicio m-1">
            <Card.Body className="rounded">
              <Card.Title className="text-center text-light mb-0">
                Visitas a Domicilio
              </Card.Title>
              <Card.Text className="text-center mb-0">
                <Link className="px-3 py-2" to={"/error404"}>
                  <i className="bi bi-plus-lg text-light"></i>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Card className="card-servicio m-1">
            <Card.Body className="rounded">
              <Card.Title className="text-center text-light mb-0">
                Cirugias
              </Card.Title>
              <Card.Text className="text-center mb-0">
                <Link className="px-3 py-2" to={"/error404"}>
                  <i className="bi bi-plus-lg text-light"></i>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Card className="card-servicio m-1">
            <Card.Body className="rounded">
              <Card.Title className="text-center text-light mb-0">
                Vacunación
              </Card.Title>
              <Card.Text className="text-center mb-0">
                <Link className="px-3 py-2" to={"/error404"}>
                  <i className="bi bi-plus-lg text-light"></i>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <Card className="card-servicio m-1">
            <Card.Body className="rounded">
              <Card.Title className="text-center text-light mb-0">
                Radiologías
              </Card.Title>
              <Card.Text className="text-center mb-0">
                <Link className="px-3 py-2" to={"/error404"}>
                  <i className="bi bi-plus-lg text-light"></i>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NuestrosServicios;
