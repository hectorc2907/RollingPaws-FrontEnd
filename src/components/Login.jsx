import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="SectionLogo d-flex justify-content-center align-content-center">
      <Card className="text-center mx-5 my-5 col-lg-3 col-md-4">
        <Card.Header as="h1">Te damos la bienvenida!</Card.Header>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electronico "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;


