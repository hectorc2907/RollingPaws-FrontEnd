import { Card, Col, Container, Row } from "react-bootstrap";

const NuestrosClientes = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Clientes</h2>
      <Row data-aos="zoom-in">
      <Col md={4} lg={4} xl={4} xxl={4}>
      <Card className="rounded sh-1 h-100">
        <Card.Body className="card-cliente">
          <section className="d-flex">
            <Row>
              <Col xs={3}>
                <img
                  src="https://picsum.photos/200?random=1"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col xs={9}>
                <h5>María García</h5>
                <p>No podría estar más feliz con la atención que recibió mi gatito en Manchas. 
                  El equipo de expertos, encabezado por la Dra. Fuz, demostró un genuino amor por los animales!</p>
              </Col>
            </Row>
          </section>
        </Card.Body>
      </Card>
    </Col>
      <Col md={4} lg={4} xl={4} xxl={4}>
      <Card className="rounded sh-1 h-100">
        <Card.Body className="card-cliente">
          <section className="d-flex">
            <Row>
              <Col xs={3}>
                <img
                  src="https://picsum.photos/200?random=2"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col xs={9}>
                <h5>Laura Martínez</h5>
                <p>Cuando mi perro necesitó atención urgente, Rolling Paws estuvo allí.
                  La respuesta rápida y profesional del equipo me dejó asombrada.</p>
              </Col>
            </Row>
          </section>
        </Card.Body>
      </Card>
    </Col>
      <Col md={4} lg={4} xl={4} xxl={4}>
      <Card className="rounded sh-1 h-100">
        <Card.Body className="card-cliente">
          <section className="d-flex">
            <Row>
              <Col xs={3}>
                <img
                  src="https://picsum.photos/200?random=3"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col xs={9}>
                <h5> Juan Pérez</h5>
                <p>Mis perros son mi familia, y Rolling Paws lo entiende perfectamente.
                  Desde el momento en que entré, fui recibido con una sonrisa y un ambiente cálido.</p>
              </Col>
            </Row>
          </section>
        </Card.Body>
      </Card>
    </Col>
      </Row>
    </Container>
  );
};

export default NuestrosClientes;
