import { Card, Col } from "react-bootstrap";

const ItemNuestrosServicios = () => {
    return (
        <Col md={6} lg={4} xl={3} xxl={3}>
            <Card className="card-servicio m-1">
                <Card.Body className="rounded">
                    <Card.Title className="text-center text-light mb-0">
                        Cirugias
                    </Card.Title>
                    <Card.Text className="text-center mb-0">
                        <i class="bi bi-plus-lg text-light"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemNuestrosServicios;