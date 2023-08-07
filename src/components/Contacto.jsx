import React, { useRef } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../style/contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (consulta, e) => {
    console.log(consulta);
    sendEmail(e);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_01ffqmn",
        "template_5e8wppq",
        form.current,
        "8d4RcEEeuqFmFfWjt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container fluid id="form-contacto">
        <div className="text-center mt-5">
          <h1>Contacta con Nosotros</h1>
        </div>
        <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <FormGroup controlId="inputNombre">
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              {...register("user_name", {
                required: "El nombre es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad mínima de caracteres es de 2 digitos",
                },
                maxLength: {
                  value: 30,
                  message: "La cantidad mínima de caracteres es de 30 digitos",
                },
              })}
              name="user_name"/>
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup controlId="inputEmail">
            <Form.Control
              type="email"
              placeholder="Tu e-mail"
              {...register("user_email", {
                required: "El e-mail es un dato obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe tener el siguiente formato mail@dominio.com",
                },
              })}
              name="user_email"/>
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </FormGroup>
          <Form.Group controlId="inputConsulta">
            <Form.Select placeholder="Seleccione el tema de su consulta"
              {...register('user_subject')}
              name="user_subject">
                <option value="Planes">Planes</option>
                <option value="Turnos">Turnos</option>
                <option value="Productos">Productos</option>
                <option value="Otros">Otros</option>
            </Form.Select>
          </Form.Group>
          <FormGroup >
            <Form.Control
              as="textarea"
              placeholder="Tu consulta"
              {...register("user_message", {
                required: "La consulta es un dato obligatorio",
                minLength: {
                  value: 5,
                  message: "La cantidad mínima de caracteres es de 5 digitos",
                },
                maxLength: {
                  value: 500,
                  message: "La cantidad máxima de caracteres es de 500 digitos",
                },
              })}
              name="user_message"></Form.Control>
            <Form.Text className="text-danger">
              {errors.consulta?.message}
            </Form.Text>
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
