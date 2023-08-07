import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const AcercaDeNosotros = () => {
  return (
    <Container>
      <h1 className="my-3">Acerca de Nosotros</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis, cupiditate dicta aliquam, est dolorem consequatur perspiciatis voluptate similique error fugiat maiores veritatis dolor, blanditiis eius? Qui accusantium labore officiis!</p>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180"/>
          <Card.Body>
            <Card.Title>Gerardo Mansilla</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Footer>
              <i class="bi bi-github m-2 fs-2"></i>
              <i class="bi bi-linkedin m-2 fs-2"></i>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default AcercaDeNosotros;
