import React from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';

const Contacto = () => {
  return (
    <>
      <Container>
        <h1>Contacta con Nosotros</h1>
        <Form>
          <FormGroup controlId="inputNombre">
            <Form.Control type="text" placeholder="Tu nombre" />
          </FormGroup>
          <FormGroup controlId="inputEmail">
            <Form.Control type="email" placeholder="Tu e-mail" />
          </FormGroup>
          <FormGroup controlId="inputEdad">
            <Form.Control type="number" placeholder="Tu edad" min={8} max={99}/>
          </FormGroup>
          <FormGroup controlId="inputConsulta">
            <Form.Control as="textarea" placeholder="Tu nombre" />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </>
  );
};

export default Contacto;