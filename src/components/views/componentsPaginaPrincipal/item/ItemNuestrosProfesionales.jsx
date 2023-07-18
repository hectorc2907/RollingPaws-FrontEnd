import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemNuestrosProfesionales = () => {
  return (
    <Col md={6} lg={4} xl={3} xxl={3}>
      <Card className="my-2">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
        />
        <Card.Body>
          <Card.Title className="text-warning">Nombre Profesional</Card.Title>
          <Link className="btn btn-danger rounded-pill" to={"/"}>
            Ver Profesional
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemNuestrosProfesionales;
