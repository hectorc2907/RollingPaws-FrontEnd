import React from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../style/contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (consulta) => {
    console.log(consulta);
  };
  return (
    <>
      <Container fluid id="form-contacto">
        <div className="text-center mt-5">
          <h1>Contacta con Nosotros</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup controlId="inputNombre">
            <Form.Control type="text"
              placeholder="Tu nombre"
              {...register('nombre', {
                required: 'El nombre es un dato obligatorio',
                minLength: {
                  value: 2,
                  message: 'La cantidad mínima de caracteres es de 2 digitos'
                },
                maxLength: {
                  value: 30,
                  message: 'La cantidad mínima de caracteres es de 30 digitos'
                }
              })}/>
            <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
          </FormGroup>
          <FormGroup controlId="inputEmail">
            <Form.Control type="email"
              placeholder="Tu e-mail"
              {...register('email', {
                required: 'El e-mail es un dato obligatorio',
                pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:'El email debe tener el siguiente formato mail@dominio.com'
                }
              })}/>
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
          </FormGroup>
          <FormGroup controlId="inputOpcionConsulta">
            <Form.Select {...register('opcionConsulta')}>
              <option>Seleccione el tema de su consulta</option>
              <option value="1">Planes</option>
              <option value="2">Turnos</option>
              <option value="3">Productos</option>
              <option value="4">Otros</option>
            </Form.Select>
          </FormGroup>
          <FormGroup controlId="inputConsulta">
            <Form.Control as="textarea"
              placeholder="Tu consulta"
              {...register('consulta',{
                required: 'La consulta es un dato obligatorio',
                minLength: {
                  value: 5,
                  message: "La cantidad mínima de caracteres es de 5 digitos",
                },
                maxLength: {
                  value: 500,
                  message: "La cantidad máxima de caracteres es de 500 digitos",
                }
              })}/>
            <Form.Text className="text-danger">{errors.consulta?.message}</Form.Text>
          </FormGroup>
          <div className="d-grid">
            <Button variant="primary" type="submit" size="lg">
              Enviar consulta
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;
