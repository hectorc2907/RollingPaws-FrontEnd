import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './../../../../style/card.css'

const ItemNuestrosPlanes = () => {
  return (
    <Col md={6} lg={4} xl={3} xxl={3} className="mb-3">
      <Card className="my-2 shadow-sm">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
        />
        <Card.Body className="rounded-bottom">
          <Card.Title>Titulo Principal</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link className="btn rounded-pill px-3 py-2" to={"/"}>
            Ir al Plan
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemNuestrosPlanes;
