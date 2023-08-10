import { Container, Row, Col, Card } from "react-bootstrap";
import pro01 from '../../../assets/profesionales/profesional01.jpg'
import pro02 from '../../../assets/profesionales/profesional02.jpg'
import pro03 from '../../../assets/profesionales/profesional03.jpg'

const NuestrosProfesionales = () => {
  return (
    <Container>
      <h2 className="text-center display-2 mt-3">Nuestros Profesionales</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4} xl={3} xxl={3} data-aos="fade-up">
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src={pro01}
            />
            <Card.Body className="rounded-bottom">
              <Row>
                <Col xs={9}>
                  <Card.Title className="text-warning">
                    Dra Michi Fuz
                  </Card.Title>
                  <p className="mb-0">Directora</p>
                </Col>
                <Col xs={3} className="text-end">
                  <i className="bi bi-person-vcard-fill"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} xl={3} xxl={3} data-aos="fade-up"
          data-aos-delay="500">
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src={pro02}
            />
            <Card.Body className="rounded-bottom">
              <Row>
                <Col xs={9}>
                  <Card.Title className="text-warning">
                    Dr. Dober Mann
                  </Card.Title>
                  <p className="mb-0">Veterinario</p>
                </Col>
                <Col xs={3} className="text-end">
                  <i className="bi bi-person-vcard-fill"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} xl={3} xxl={3} data-aos="fade-up"
          data-aos-delay="1000">
          <Card className="my-2 shadow-sm">
            <Card.Img
              variant="top"
              src={pro03}
            />
            <Card.Body className="rounded-bottom">
              <Row>
                <Col xs={9}>
                  <Card.Title className="text-warning">
                    Dr. Juan Cann Ario
                  </Card.Title>
                  <p className="mb-0">Veterinario</p>
                </Col>
                <Col xs={3} className="text-end">
                  <i className="bi bi-person-vcard-fill"></i>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NuestrosProfesionales;
