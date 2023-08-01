import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemNuestrosProfesionales = () => {
  return (
    <Col md={6} lg={4} xl={3} xxl={3}>
      <Card  className="my-2 shadow-sm">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
        />
        <Card.Body className="rounded-bottom">
          <Row>
                <Col xs={9}>
                  <Card.Title className="text-warning">Nombre Profesional</Card.Title>
                  <p className="mb-0">Cargo</p>
                </Col>
                <Col xs={3} className="text-end">
                  <i class="bi bi-person-vcard-fill"></i>
                </Col>
              </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemNuestrosProfesionales;
