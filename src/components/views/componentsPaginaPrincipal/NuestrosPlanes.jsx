import { Card, Col, Row, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './../../../style/card.css'
import Contacto from "../Contacto";

const NuestrosPlanes = () => {
  return (
    <Container>
      <h2 className="text-center display-2">Nuestros Planes</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4} xl={3} xxl={3} className="mb-3" data-aos="fade-up">
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
            />
            <Card.Body className="rounded-bottom">
              <Card.Title>Primeros Pasos</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link className="btn rounded-pill px-3 py-2" to={"/contacto"}>
                Ir al Plan
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          className="mb-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg"
            />
            <Card.Body className="rounded-bottom">
              <Card.Title>Madurando</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link className="btn rounded-pill px-3 py-2" to={"/contacto"}>
                Ir al Plan
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          className="mb-3"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
            />
            <Card.Body className="rounded-bottom">
              <Card.Title>Adultos</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link className="btn rounded-pill px-3 py-2" to={"/contacto"}>
                Ir al Plan
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NuestrosPlanes;
