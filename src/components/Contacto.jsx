import React from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import '../style/contacto.css'

const Contacto = () => {
  return (
    <>
      <Container fluid>
        <div className="text-center">
          <h1>Contacta con Nosotros</h1>
        </div>
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
          <div className="d-grid">
            <Button variant="primary" type="submit" size='lg'>
              Enviar consulta
            </Button>
          </div>
        </Form>
      </Container>
      </>
  );
};

export default Contacto;