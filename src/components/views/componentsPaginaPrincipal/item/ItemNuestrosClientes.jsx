import { Card, Col, Row } from "react-bootstrap";

const ItemNuestrosClientes = () => {
  return (
    <Col md={4} lg={4} xl={4} xxl={4}>
      <Card className="rounded sh-1">
        <Card.Body className="card-cliente">
          <section className="d-flex">
            <Row>
              <Col xs={3}>
                <img
                  src="https://picsum.photos/200/"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col xs={9}>
                <h5>Nombre Usuario</h5>
                <p>Texto Principal</p>
              </Col>
            </Row>
          </section>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemNuestrosClientes;
