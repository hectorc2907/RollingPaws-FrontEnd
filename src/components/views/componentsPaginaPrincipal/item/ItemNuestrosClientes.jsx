import { Card, Col } from "react-bootstrap";


const ItemNuestrosClientes = () => {
  return (
    <Col md={4} lg={4} xl={4} xxl={4}>
    <Card>
        <Card.Body>
            <section className="d-flex">
                <article>
                    IMG
                </article>
                <article>
                    <h5>Nombre Usuario</h5>
                    <p>Texto Principal</p>
                </article>
            </section>
        </Card.Body>
    </Card>
    </Col>
  );
};

export default ItemNuestrosClientes;
